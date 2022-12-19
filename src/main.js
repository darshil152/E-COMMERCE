
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import headerlogo from "./assets/headerlogo.svg"
import profile from "./assets/profile.svg"
import cart from "./assets/cart.svg"
import hoodies from "./assets/hoodies.jpg"
import imagetshirt from "./assets/imagetshirt.jpg"
import shirts from "./assets/shirts.jpg"
import delivery from "./assets/delivery.png"
import dollor from "./assets/dollor.png"
import support from "./assets/support.png"
import one from "./assets/one.jpg"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import sneker from './assets/sneker.png'
import apperal from './assets/appeal.png'
import watch from './assets/watchjpg.jpg'
import video from "./videos/video3mp4.mp4"





export default function Main() {

    let logindata = localStorage.getItem('login') ? JSON.parse(localStorage.getItem('login')) : [];
    let registerdata = localStorage.getItem('Register') ? JSON.parse(localStorage.getItem('Register')) : [];
    const [currentdata, setCurrentdata] = useState([]);


    useEffect(() => {
        for (let i = 0; i < logindata.length; i++) {
            if (logindata[i].email == registerdata[i].email) {
                setCurrentdata(registerdata[i])
            }
        }
    }, [])

    
    


    let getdata = JSON.parse(localStorage.getItem('featured'));
    console.log(getdata);

    let profilehandle = () => {
        window.location.href = '/'
    }

    const tshirt = () => {
        window.location.href = '/tshirt'
    }
    const sneaker = () => {
        window.location.href = './sneaker'
    }





    return (
        <div className='main'>
            <div class="container bg-white">
                <nav class="navbar navbar-expand-md navbar-light bg-white">
                    <div class="container-fluid p-0">
                        <img src={headerlogo} className="headerlogo" />
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav"
                            aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="fas fa-bars"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="myNav">
                            <div class="navbar-nav ms-auto">
                                <NavDropdown title="Sneakers" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">All Sneakers</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Yezzy
                                    </NavDropdown.Item>
                                    <NavDropdown.Item >Jordans</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Dunks</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Grails</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Men's" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Clothing
                                        <NavDropdown.Item href="https://www.google.com/">Sweatshirts</NavDropdown.Item>
                                        <NavDropdown.Item href="http://localhost:3000/tshirt">Tshirt</NavDropdown.Item>
                                        <NavDropdown.Item >shirts</NavDropdown.Item>
                                        <NavDropdown.Item >Polo tshirt</NavDropdown.Item>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item >Dresses</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Skirts</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Women's" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Clothing
                                        <NavDropdown.Item href="https://www.google.com/">Sweatshirts</NavDropdown.Item>
                                        <NavDropdown.Item href="http://localhost:3000/tshirt">Tshirt</NavDropdown.Item>
                                        <NavDropdown.Item >shirts</NavDropdown.Item>
                                        <NavDropdown.Item >Polo tshirt</NavDropdown.Item>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item >Jordans</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Dunks</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Grails</NavDropdown.Item>
                                </NavDropdown>

                                <a class="nav-link" href="#">Kid's</a>
                                <a class="nav-link" href="#">Accessories</a>
                                <a class="nav-link" href="#">Cosmetics</a>
                            </div>
                        </div>
                    </div>
                    <ul class="navbar-nav icons ms-auto mb-2 mb-lg-0">
                        <li class=" nav-item pe-3">
                            <img src={currentdata.file} className="profile" onClick={profilehandle} style={{borderRadius:"15px"}} />
                        </li>
                        <li class=" nav-item pe-3">
                            <img src={cart} className="cart" />
                        </li>

                    </ul>
                </nav>
            </div>

            <div className='video'>
                <video src={video} width="600" height="300" controls="controls" autoplay="true" />
            </div>
            {/* 
            <div className='container'>
                <div className='row'>
                    {
                        getdata.length > 0 && getdata.map((items) => {
                            return (
                                <div className='feature'>
                                    <img src={items.file[0]} style={{width:"100px"}}/>
                                    <h1>{items.productname}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div> */}

            {/* <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='w-100 d-block bannerimage'
                    itemId={1}
                    src={one}
                    alt='...'
                >
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block bannerimage'
                    itemId={2}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                    alt='...'
                >
                    <h5>Second slide label</h5>
                    <p className='bannerparagraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='adads'>
                        <button className='cfade'>Collections</button>
                    </div>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block bannerimage'
                    itemId={3}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p className='bannerparagraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='adads'>
                        <button className='cfade'>Collections</button>
                    </div>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100 d-block bannerimage'
                    itemId={4}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p className='bannerparagraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='adads'>
                        <button className='cfade'>Collections</button>
                    </div>
                </MDBCarouselItem>
            </MDBCarousel> */}


            <main class="grid">
                <section class="project-grid">
                    <a href="#">
                        <img
                            src={sneker}
                            alt=""
                            loading="lazy"
                        />
                        <div className='adad'>
                            <button className='cfade' onClick={sneaker}>Shop Now</button>
                        </div>
                    </a>
                    <a href="#">
                        <img
                            src={apperal}
                            alt=""
                            loading="lazy"
                        />
                        <div className='adad'>
                            <button className='cfade' onClick={tshirt}>Shop Now</button>
                        </div>
                    </a>
                    <a href="#">
                        <img
                            src={watch}
                            alt=""
                            loading="lazy"
                        />
                        <div className='adad'>
                            <button className='cfade' onClick={tshirt}>Shop Now</button>
                        </div>
                    </a>
                </section>
            </main>

            <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143356/127.png" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143428/129.png" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143448/196.png" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143434/144.png   " className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143416/810.png" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143407/512.png" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143422/104.png" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://global-uploads.webflow.com/5f1c9cd99129705b848a815a/6123ced7720f29323f0110c3_2.jpg" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://global-uploads.webflow.com/5f1c9cd99129705b848a815a/6123cf0a1dad320b81494d58_5.jpg" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://global-uploads.webflow.com/5f1c9cd99129705b848a815a/6123cfa20eb10892de86b2cb_10.jpg" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://global-uploads.webflow.com/5f1c9cd99129705b848a815a/6123cfaa6e097a705d5be171_11.jpg" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://cdn.shopify.com/s/files/1/1056/1394/t/239/assets/amiri.svg?v=84927243290060662811668016991" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://global-uploads.webflow.com/5f1c9cd99129705b848a815a/6123cfd1a3ad0dfa12395a76_14.jpg" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://1000logos.net/wp-content/uploads/2020/03/Asics-logo-500x166.png" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://1000logos.net/wp-content/uploads/2021/05/Air-Jordan-Jumpman-logo-500x281.png" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://global-uploads.webflow.com/5f1c9cd99129705b848a815a/6123cfd1a3ad0dfa12395a76_14.jpg" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://global-uploads.webflow.com/5f1c9cd99129705b848a815a/6123d0a8a3ad0d3207395ba2_22.jpg" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://global-uploads.webflow.com/5f1c9cd99129705b848a815a/6123d0a8a3ad0d3207395ba2_22.jpg" className='courosal' alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://global-uploads.webflow.com/5f1c9cd99129705b848a815a/6123d1b57de6188bb7f2a040_30.jpgs" className='courosal' alt="" />
                    </div>
                </div>
            </div>

            <div class="bg-gray-100 text-dark-700 py-6">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-4 service-column">
                            <img src={delivery} className="shipicons" />
                            <div class="service-text">
                                <h6 class="text-uppercase">Free shipping &amp; return</h6>
                                <p class="text-muted fw-light text-sm mb-0">Free Shipping over $300</p>
                            </div>
                        </div>

                        <div class="col-lg-4 service-column">
                            <img src={dollor} className="shipicons" />
                            <div class="service-text">
                                <h6 class="text-uppercase">Money back guarantee</h6>
                                <p class="text-muted fw-light text-sm mb-0">30 Days Money Back Guarantee</p>
                            </div>
                        </div>
                        <div class="col-lg-4 service-column">
                            <img src={support} className="delivery" />
                            <div class="service-text">
                                <h6 class="text-uppercase">020-800-456-747</h6>
                                <p class="text-muted fw-light text-sm mb-0">24/7 Available Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}
