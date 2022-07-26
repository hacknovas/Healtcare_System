import React from 'react';

export default function HomeP() {

    return (
        <>
            <div className="ulockd-home-slider">
                <div className="container-fluid">
                    <div className="row">
                        <div className="pogoSlider" id="js-main-slider">
                            <div className="bg-text">
                                <h1>We Are Here for You</h1>
                                <p>Welcome to Online Consultation and Services</p>
                            </div>
                            <div className="pogoSlider-slide" >
                                <img src="images/sliderf.jpg" style={{ opacity: "0.8" }} className="img-fluid" alt="No image" data-transition="fade" data-duration="1500"></img>
                            </div>
                            <div className="pogoSlider-slide">
                                <img src="images/sliderS.jpg" style={{ opacity: "0.8" }} className="img-fluid" alt="No image" data-transition="fade" data-duration="1500"></img>
                            </div>
                            <div className="pogoSlider-slide">
                                <img src="images/sliderT.jpg" style={{ opacity: "0.8" }} className="img-fluid" alt="No image" data-transition="fade" data-duration="1500"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="about-box">
                <div className="about-a1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-box">
                                    <h2>About Us</h2>
                                    <p>is the largest multi-channel digital healthcare platform in India, created with a vision of eliminating flexibility blockages from the healthcare industry. We believe in making healthcare affordable to everyone by combining analytic excellence, affordable cost, and extensive research with advanced technology.</p>
                                    <p> </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row align-items-center about-main-info">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <h2> Welcome to Online Consultation </h2>
                                        <p>This is only single online platform where you have access to a wide range of services such as online pharmacy, online doctor consultations, and diagnostic lab tests at home.</p>
                                        <p>We also provide expert solutions for chronic conditions and COVID-care with a secured digital vault, where you can safely upload all your medical reports.The process of automation is slow paced due to various inherent factorsand is being challenged by the inventory and escalating budgets forprocurement of drugs. </p>
                                        <br />
                                        <b>Always caring about your health, we are here to help you!</b><br />
                                        <b>You can check your Health by giving answer to some questions.</b><br />
                                        <a href="/checker" className="new-btn-d br-2">Try it</a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="about-m">
                                            <img src="images/123.jpg" alt=""></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="services" className="services-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-box">
                                <h2>Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <div className="serviceBox">
                                        <div className="service-icon"><i className="fa fa-h-square" aria-hidden="true"></i></div>
                                        <h3 className="title">surgical material</h3>
                                        <p className="description">
                                        </p>
                                        <a href="#" className="new-btn-d br-2">Read More</a>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="serviceBox">
                                        <div className="service-icon"><i className="fa fa-stethoscope" aria-hidden="true"></i></div>
                                        <h3 className="title">hospital accessories</h3>
                                        <p className="description">

                                        </p>
                                        <a href="#" className="new-btn-d br-2">Read More</a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="serviceBox">
                                        <div className="service-icon"><i className="fa fa-medkit" aria-hidden="true"></i></div>
                                        <h3 className="title">first Aid</h3>
                                        <p className="description">

                                        </p>
                                        <a href="#" className="new-btn-d br-2">Read More</a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="serviceBox">
                                        <div className="service-icon"><i className="fa fa-hospital-o" aria-hidden="true"></i></div>
                                        <h3 className="title">hospital</h3>
                                        <p className="description">

                                        </p>
                                        <a href="#" className="new-btn-d br-2">Read More</a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="serviceBox">
                                        <div className="service-icon"><i className="fa fa-ambulance" aria-hidden="true"></i></div>
                                        <h3 className="title">ambulance</h3>
                                        <p className="description">
                                        </p>
                                        <a href="#" className="new-btn-d br-2">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="team" className="team-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-box">
                                <h2>Our Doctor</h2>
                                <p> </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="our-team">
                                <div className="pic">
                                    <img src="images/Kgade.jpg" alt=""></img>
                                </div>
                                <div className="team-content">
                                    <h3 className="title">Kaustbh Gade</h3>
                                    <span className="post">Full Stack Developer</span>
                                    <ul className="social">
                                        <li><a href="https://www.instagram.com/ig_kgade/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="our-team">
                                <div className="pic">
                                    <img src="images/PD.jpg" alt=""></img>
                                </div>
                                <div className="team-content">
                                    <h3 className="title">Prathamesh Doni</h3>
                                    <span className="post">MERN Developer</span>
                                    <ul className="social">
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="our-team">
                                <div className="pic">
                                    <img src="images/Shiv.jpg" alt=""></img>
                                </div>
                                <div className="team-content">
                                    <h3 className="title">Shivprasad Bendre</h3>
                                    <span className="post">Entrepreneur</span>
                                    <ul className="social">
                                        <li><a href="https://www.instagram.com/shivprasadbendre007/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="our-team">
                                <div className="pic">
                                    <img src="images/Yash.jpg" alt=""></img>
                                </div>
                                <div className="team-content">
                                    <h3 className="title">Yashraj Gaikwad</h3>
                                    <span className="post">Full Stack Developer</span>
                                    <ul className="social">
                                        <li><a href="https://www.instagram.com/yash_gaikwad_001/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div><br></br>
            <p className="text-center border font-weight-bold">"The aim of medicine is to prevent disease and prolong life, the ideal of medicine is to eliminate the need of a physician."
                <br></br>
                - William J. Mayo.</p>
            <br />
        </>
    );
}
