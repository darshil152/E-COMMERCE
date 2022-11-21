import React, { useState, useCallback } from "react";
import { CartProvider, useCart } from "react-use-cart";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import hoddies from './assets/jackets.jpg';
import show from './assets/show.gif';
import { json } from 'react-router';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ReactImageZoom from 'react-image-zoom';
import ReactImageMagnify from 'react-image-magnify';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ModalDialog } from "react-bootstrap";




// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//     },
// };

let handlesize = (data) => {
    console.log("your selected size", data);
    toast.success(((data)), {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000
    });
}

let dummyarray = [];


let handlecart = (e) => {
    console.log(JSON.parse(localStorage.getItem('productdetail')))
}


export default function Tshirt() {

    const [getteesdata, setGetteesdata] = useState(JSON.parse(localStorage.getItem('productdetail')));
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState({});




    const settings = {
        customPaging: function (i) {
            return (
                <div>
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
                </div>
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

    const openModal = (data) => {
        console.log('data :: ', data)
        setModal(data)
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    // const openModal = useCallback(() => setIsOpen(true), setModalData(data), []);
    // const closeModal = useCallback(() => setIsOpen(false), []);

    return (
        <div className='container'>
            <div class="row">
                <h1 className='heading1'>Tshirts</h1>
                <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                {
                    getteesdata.length > 0 && getteesdata.map((item, i) => {
                        return (
                            <div class="col-md-3 col-sm-6">
                                <div class="product-grid">
                                    <div class="product-image">
                                        <a href="#" class="image">
                                            <img class="pic-1" src={item.file[0]} />
                                        </a>
                                        <span class="product-discount-label">{item.discount}</span>
                                        <ul class="product-links">
                                            <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart" ></i></a></li>
                                            <li><a href="#" data-tip="Quick View" onClick={() => openModal(item)}><i class="fa fa-search" ></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="product-content">

                                        <h3 class="title">{item.productname}</h3>
                                        <div class="price">₹{item.price}</div>
                                        <a class="add-to-cart" href="#" >add to cart</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {isOpen && <Modal isOpen={isOpen} onRequestClose={closeModal}>
                    <input type="button" value="Close modal" onClick={closeModal} />
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
                                                    <Zoom>
                                                        <Slider {...settings}>
                                                            {modal.file.map((item, i) => (
                                                                <div>
                                                                    <img
                                                                        src={modal.file[i]}
                                                                        alt=""
                                                                        style={{ width: "550px", height: "70vh" }}
                                                                        className="slickslideriamge"
                                                                    />
                                                                </div>
                                                            ))}

                                                        </Slider>
                                                    </Zoom>
                                                </div>


                                            </div>
                                            {/* <div class="preview-pic tab-content"> */}
                                                {/* <ul class="preview-thumbnail nav nav-tabs">
                                                    {modal.file && modal.file.map((item, i) => {
                                                        return (
                                                            <li class="active">
                                                                <a data-target="#pic-1" data-toggle="tab">
                                                                    <img src={item} className="innerproduct" />
                                                                   
                                                                            <img
                                                                                alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                                                                                src={item}
                                                                                width="100"
                                                                                className="zoomeffct" 
                                                                            />
                                                                      
                                                                </a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul> */}

                                            {/* </div> */}
                                        </div>
                                        <div class="details col-md-6">
                                            <h3 class="product-title">{modal.productname}</h3>
                                            <h4 class="price">current price: <span>${modal.price}</span></h4>
                                            <div>
                                                {modal.checked && modal.checked.map((item, i) => {
                                                    return (
                                                        <button className="sizebutton" onClick={() => handlesize(item)}>{item}</button>

                                                    )
                                                })}
                                            </div>
                                            <div className='adada1'>
                                                <button className='cfade1' value="Close modal">Add to Wishlist</button>
                                                <button className='cfade1' value="Close modal" >Add to Cart</button>
                                            </div>
                                            <p class="product-description">{modal.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>}
            </div>
        </div>

    )
}