import React from 'react'
// import logo from './logo.jpg'
// import profile from './profile.jpg'


export default function Header() {
  return (
    <section class="header">
        <div class="container-fluid">
            <div class="row align-items-baseline">
                <div class="col-lg-3 col-md-6 col-6">
                    <div class="header_logo">
                        <img src="./assets/Images/logo.svg" width="100%"/>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-6 d-flex justify-content-end">
                    <nav class="navbar navbar-expand-lg">
                        <div class="">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="navmenu">
                                
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled">About Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled">Portfolio</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled">Career</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled">We’r Hiring!</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled">Contact</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled">Team</a>
                                    </li> 
                                    <div class="buttonBox position-relative d-inline-flex">
                                        {/* <button class="btn-style"><img src="./assets/Images/arrow_right.png"> Get Started </span></button> */}
                                        <div class="border-class"></div>
                                        <div class="border-class"></div>
                                    </div>                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-6 d-flex justify-content-end">
                    <div class="header_btn">
                        <button class="btn">Let’s Talk<img src="./assets/Images/right_arrow.png" class="ms-3" width="14px"/></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
