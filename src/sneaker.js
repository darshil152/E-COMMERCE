import { modalClasses } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Sneaker() {

    const [datas, setDatas] = useState(JSON.parse(localStorage.getItem('productdetail')));
    const [abc, setAbc] = useState({});


    // const handleClose = () => setShow(false);

    const handleShow = (data) => {
        // setShow()
        console.log(data)
        setAbc(data)
        console.log(abc)
        
    }
    return (

        <>{
            datas.length > 0 && datas.map((items, i) => {
                return (
                    <div className="container">
                        <div className="product-list">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="white-box" onClick={() => handleShow(items)}>
                                        {/* <div className="wishlist-icon">

                                            <a href="javascript:void(0);">
                                                <img src={items.file[0]} /></a>
                                        </div> */}
                                        <div className="product-img">
                                            <img src={items.file[0]} />
                                        </div>
                                        <div className="product-bottom">
                                            <div className="product-name">{items.productname}</div>
                                            <div className="price">
                                                <span className="rupee-icon">₹</span>{items.price}
                                            </div>
                                            <a href="#" className="blue-btn">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })
        }
    
        </>
    )
}
