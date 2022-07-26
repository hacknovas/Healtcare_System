import React from 'react';

export default function Footer() {
    return (
        <>
            <div className="footer mt-auto border py-2 bg-dark " style={{ color: "white", backgroundColor: "black", textAlign: "center" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-top">
                                <a className="new-btn-d br-2" href="/appointment"><span>Book Appointment</span></a>
                                <div className="mail-b" href="mailto:creatives.doni@gmail.com@example.com"><a href="mailto:creatives.doni@gmail.com@example.com">
                                    creatives.doni@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="wel-nots">
                                <p></p>
                            </div>
                            <div className="right-top">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <p> Doni_Prathamesh &copy; All Rights Reserved.  </p>
            </div>
        </>
    );
}
