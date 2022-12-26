import React, { useState, useCallback, createContext, useEffect } from "react";
import { CartProvider, useCart } from "react-use-cart";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import hoddies from './assets/jackets.jpg';
import show from './assets/show.gif';
import { json, useAsyncError } from 'react-router';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ReactImageZoom from 'react-image-zoom';
import ReactImageMagnify from 'react-image-magnify';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ModalDialog } from "react-bootstrap";
import { type } from "@testing-library/user-event/dist/type";
import Cart from './cart';
import { color } from "@mui/system";
import { BatchPrediction, CheckBox, PermCameraMic } from "@mui/icons-material";
import sizechart from "./assets/sizechart.png"
import Wishlist from "./wishlist";
import Trending from "./Trending";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { lightGreen } from "@mui/material/colors";



export default function Tshirt() {

    const [getteesdata, setGetteesdata] = useState(JSON.parse(localStorage.getItem('productdetail')));
    const [color, setColor] = useState('green')
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState({});
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [carts, setCarts] = useState({})

    //-------------addtocart------------------------//
    const [add, setAdd] = useState([])
    const addtocart = (data) => {
        let olddata = localStorage.getItem("cartitems") ? JSON.parse(localStorage.getItem('cartitems')) : []
        let duplicate = false;

        for (let i = 0; i < olddata.length; i++) {
            if (olddata[i] === data) {
                duplicate = true
            }
        }
        if (!duplicate) {
            add.push(data)
            setAdd(add)
            localStorage.setItem('cartitems', JSON.stringify(add));
        }
        console.log(add);
    }


    //  -------------------- Price sorting ----------------------//
    const [filters, setFilters] = useState({})
    const [filters2, setFilters2] = useState({})
    const [filters3, setFilters3] = useState({})
    const sorting = (e) => {
        getteesdata.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        console.log(getteesdata)
        setFilters(getteesdata)
        setFilters2()
    }

    const sorting1 = (e) => {
        getteesdata.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        console.log(getteesdata)
        setFilters2(getteesdata)
        setFilters()
    }

    const sorting2 = (e) => {
        getteesdata.sort(function (a, b) {
            if (a.productname < b.productname) {
                return -1;
            }
            if (a.productname > b.productname) {
                return 1;
            }
            return 0;
        });
        setFilters3(getteesdata)
        setFilters()
        setFilters2()

    }

    const handleChanges = (e) => {
        console.log(e.target.value);
        if (e.target.value == "low to high") {
            sorting()
        } else if (e.target.value == "high to low") {
            sorting1()
        } else if (e.target.value == "a to z")
            sorting2()
    }


    //-----------------related products ---------------------------//
    const [relate, setRelate] = useState({})
    const [footware, setFootware] = useState({})
    const [fflag, setFflag] = useState(false)

    useEffect(() => {
        const filtered = getteesdata.filter((items) => {
            return items.category === "Cloths"
        });
        setRelate(filtered)
        // console.log(filtered);
    }, [])


    // useEffect(() => {
    //     const filtered1 = getteesdata.filter((item) => {
    //         return item.category === "Footware"
    //     });
    //     setFootware(filtered1)
    //     setFflag(true)
    //     console.log(footware);
    // }, [])



    //---------------select size-------------------------------//
    let handlesize = (data) => {
        console.log("your selected size", data);
        toast.success(((data)), {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000
        });
    }



    //-------------------product slider --------------------------//
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img
                        src={modal.file[i]}
                        alt=""
                        style={{
                            height: "80px",
                            width: "72px",
                            objectFit: "fill",
                            borderRadius: "10px"
                        }}
                    />
                </a>
            );
        },
        dots: true,
        cssEase: "linear",
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }



    // ------------------open model ---------------------//

    const openModal = (data) => {
        // console.log('data :: ', data)
        setModal(data)
        setIsOpen(true)




    }
    const closeModal = () => {
        setIsOpen(false)
    }

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }
    const close = () => {
        setModalIsOpen(false)
    }


    //-------------------add to cart /state lifting---------------//
    const [cart, setCart] = useState([])
    const addtocarts = (data) => {
        console.log(data)

        let oldcart = localStorage.getItem("cartitems") ? JSON.parse(localStorage.getItem('cartitems')) : [];
        console.log('old :: ', oldcart)
        let ismatched = false;

        for (let i = 0; i < oldcart.length; i++) {
            if (oldcart[i] == data) {
                ismatched = true
                console.log('come')
            }
        }
        if (ismatched) {
            alert('already added')
        } else {
            cart.push(data)
            setWishlist1(cart)
            console.log('cart :: ', cart)
            localStorage.setItem('cartitems', JSON.stringify(cart))
        }
        console.log(cart, '-----')
    }

    //----------------show selected size ----------------------------//
    const getInitialState = () => {
        const value = "X";
        return value;
    };
    const [value, setValue] = useState('');
    const size = (e) => {
        setValue(e.target.value);
    };
    // console.log(value);



    //-------------------Total price of product ---------------------//
    const [total, setTotal] = useState('')
    const [after, setAfter] = useState([])
    let temparray3 = useState([])

    const sendprice = (data, b) => {
        console.log(b * modal.price);
        setTotal(b * modal.price)
        setAfter(data)

        //   window.location.href = "./order/" + data.id  

    }
    // console.log(after);
    // console.log(total);


    //-------------------Wishlist ------------------------------------//
    const [wishlist1, setWishlist1] = useState([])
    const addto = (data) => {

        let oldwishlsit = localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem('wishlist')) : []
        let flag = false;

        for (let i = 0; i < oldwishlsit.length; i++) {
            if (oldwishlsit[i].id === data.id) {
                flag = true
            }
        }
        if (!flag) {
            wishlist1.push(data)
            setWishlist1(wishlist1)
            localStorage.setItem('wishlist', JSON.stringify(wishlist1))
        }
        console.log(wishlist1)
    }
    //------------------------Trending-------------------------------//
    // const [trending, setTrending] = useState([])
    // const [flag,setFlag] = useState(false)
    // let trendings = localStorage.getItem("productdetail") ? JSON.parse(localStorage.getItem('productdetail')) : []
    // let isflag = false
    // for (let i = 0; i < trendings.length; i++) {
    //         if (trendings[i].trending == "Y") {
    //             setFlag(true)
    //         }        
    // }
    // if (flag) {
    //     setTrending(trendings)
    // } else {
    //     console.log('false')
    // }

    // const openModal = useCallback(() => setIsOpen(true), setModalData(data), []);
    // const closeModal = useCallback(() => setIsOpen(false), []);



    return (
        <>
            <div className='container'>
                <div class="row abcd">
                    <h1 className='heading1'>Tshirts</h1>
                    <div className="soring">
                        <label className="price">Price:</label>
                        <select id="sorting" onChange={(e) => handleChanges(e)}>
                            <option value="low to high" id="xyz" >low to high</option>
                            <option value="high to low" id="abc" >high to low</option>
                            <option value="a to z" id="def" >a to z</option>
                        </select>

                        {/* <button onClick={sorting}>Low to high</button> */}
                    </div>
                    {
                        getteesdata.length > 0 && getteesdata.map((item, i) => {
                            return (
                                <div class="col-md-3 col-sm-6">
                                    <div class="product-grid">
                                        <div class="product-image">
                                            <a href="#" class="image">
                                                <img class="pic-1" src={item.file[0]} />
                                            </a>
                                            <span class="product-discount-label">{item.discount}%</span>
                                            <ul class="product-links">
                                                <li><a href="#" data-tip="Add to Wishlist" onClick={() => addto(item)}><i class="fas fa-heart" ></i></a></li>
                                                <li><a href="#" data-tip="Quick View" value="related" onClick={() => openModal(item)}><i class="fa fa-search" ></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product-content">
                                            <h3 class="title">{item.productname}</h3>
                                            <div class="price">₹{item.price}</div>
                                            <a class="add-to-cart" onClick={() => addtocarts(item.id)} >add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {isOpen && <Modal isOpen={isOpen} onRequestClose={closeModal}>
                        <button onClick={closeModal}>X</button>
                        <div>
                            <div class="container">
                                <div class="card">
                                    <div class="container-fliud">
                                        <div class="wrapper row">
                                            <div class="preview col-md-6">
                                                <div class="tab-pane active" id="pic-1">
                                                    {/* <img src={modal.file && (modal.file.length > 0 ? modal.file[0] : '')}
                                                    isclassName="innerproduct"
                                                    width="500" /> */}
                                                    <div>
                                                        <Slider {...settings}>
                                                            {modal.file.map((item, i) => (
                                                                <Zoom>
                                                                    <div>
                                                                        <img
                                                                            src={modal.file[i]}
                                                                            alt=""
                                                                            style={{ width: "100%", height: "100%" }}
                                                                            className="slickslideriamge"
                                                                        />
                                                                    </div>
                                                                </Zoom>
                                                            ))}
                                                        </Slider>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="details col-md-6">
                                                <h3 class="product-title">{modal.productname}</h3>
                                                <h4 class="price"><span>MRP: ₹{modal.price}</span></h4>
                                                <div class="product-info-button" onClick={setModalIsOpenToTrue}>Size chart →

                                                    <Modal isOpen={modalIsOpen} className="charts" onRequestClose={close}>
                                                        {/* <button onClick={closeModals}>x</button> */}
                                                        <button onClick={close}>Close</button>
                                                        <div className="sizechart" >
                                                            <img src={sizechart} />
                                                        </div>
                                                    </Modal>
                                                </div>
                                                <div className="sizes">
                                                    {/* {modal.checked && modal.checked.map((item, i) => {
                                                    return (
                                                        <button className="sizebutton" onClick={() => handlesize(item)}>{item}</button> 
                                                    )
                                                   
                                                })} */}
                                                    <select value={value} onChange={(e) => size(e)}>
                                                        <option value="X">X</option>
                                                        <option value="S">S</option>
                                                        <option value="M">M</option>
                                                        <option value="L">L</option>
                                                        <option value="XL">XL</option>
                                                        <option value="XXL">XXL</option>
                                                        <option value="XXXL">XXXL</option>
                                                    </select>
                                                    <h4>{`You selected size ${value}`}</h4>
                                                </div>


                                                <div className='adada1'>
                                                    <button className='cfade1' value="Close modal" onClick={() => addtocart(modal)}>Add to cart</button>
                                                </div>



                                                {/* <p class="product-description">{modal.description}</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="related">
                            <h1 className="prd">Related Product</h1>
                        </div>
                        <div className="rel">
                            {
                                relate.length > 0 && relate.map((items, i) => {
                                    return (
                                        <>
                                            <div>
                                                <img src={items.file[i]} style={{ width: "150px" }} />
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </Modal>}
                </div>
            </div>
        </>
    )
}