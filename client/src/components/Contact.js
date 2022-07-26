import react from "react";

export default function Contact() {

    const postdata = async (e) => {
        e.preventDefault();

        const Name = e.target["Name"].value;
        const Email = e.target["Email"].value;
        const Number = e.target["Number"].value;
        const msg = e.target["msg"].value;

        const result = await fetch('/conInfo', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                Name, Email, Number, msg
            })
        })

        alert("Succesfully Submited");

    }

    return (
        <>
            <div id="contact" className="contact-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-box">
                                <h2>Contact us</h2>
                                <p> </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-lg-12 col-xs-12">
                            <div className="contact-block">
                                <form id="contactForm" onSubmit={postdata}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="name" name="Name"
                                                    placeholder="Your Name" required data-error="Please enter your name" ></input>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Your Email" id="email" className="form-control"
                                                    name="Email" required data-error="Please enter your email"></input>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="Number" placeholder="Your number" id="number" className="form-control"
                                                    name="Number" required data-error="Please enter your number"></input>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" id="message" placeholder="Your Message" rows="8"
                                                    data-error="Write your message" name="msg" required></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="submit-button text-center">
                                                <button className="btn btn-common" id="submit" type="submit">Send Message</button>
                                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div className="col-lg-12 col-xs-12">
                            <div className="left-contact">
                                <h2>Address</h2>
                                <div className="media cont-line">
                                    <div className="media-left icon-b">
                                        <i className="fa fa-location-arrow" aria-hidden="true"></i>
                                    </div>
                                    <div className="media-body dit-right">
                                        <h4>Address</h4>
                                        <p>VPKBIET, Baramati</p>
                                    </div>
                                </div>
                                <div className="media cont-line">
                                    <div className="media-left icon-b">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </div>
                                    <div className="media-body dit-right">
                                        <h4>Email</h4>
                                        <a href="#">creatives.doni@gmail.com</a><br></br>
                                    </div>
                                </div>
                                <div className="media cont-line">
                                    <div className="media-left icon-b">
                                        <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                                    </div>
                                    <div className="media-body dit-right">
                                        <h4>Phone Number</h4>
                                        <a href="#">8668260714</a><br></br>
                                        <a href="#"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}