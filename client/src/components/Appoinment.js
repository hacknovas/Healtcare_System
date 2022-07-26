import react from "react";

export default function Appointment() {
    const postdata = async (e) => {
        e.preventDefault();

        const Name = e.target["Name"].value;
        const Email = e.target["Email"].value;
        const Phone = e.target["Phone"].value;
        const Disease = e.target["Disease"].value;
        const Time = e.target["Time"].value;

        const result = await fetch('/saveAppoinment', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                Name, Phone, Email, Disease, Time
            })
        });

        alert("Appoinment is Booked");

    }

    return (
        <>
            <div id="appointment" className="appointment-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-box">
                                <h2>Appointment</h2>
                                <p> </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="well-block">
                                <div className="well-title">
                                    <h2>Book an Appointment</h2>
                                </div>
                                <form onSubmit={postdata}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="name">Name</label>
                                                <input id="name" required name="Name" type="text" placeholder="Name"
                                                    className="form-control input-md"></input>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="email">Email</label>
                                                <input id="email" required name="Email" type="text" placeholder="E-Mail"
                                                    className="form-control input-md"></input>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="date">Phone Number</label>
                                                <input id="date" required name="Phone" type="Number" placeholder="Enter Contact Number"
                                                    className="form-control input-md"></input>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="time">Preferred Time</label>
                                                <select id="time" required name="Time" className="form-control" type="text">
                                                    <option value="8:00 to 9:00">8:00 to 9:00</option>
                                                    <option value="9:00 to 10:00">9:00 to 10:00</option>
                                                    <option value="10:00 to 1:00">10:00 to 1:00</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="appointmentfor">Department</label>
                                                <select type="text" id="appointmentfor" name="Disease" className="form-control">
                                                    <option value="Choose Department">Choose Department</option>
                                                    <option value="Gynacology">Gynacology</option>
                                                    <option value="Dermatologist">Dermatologist</option>
                                                    <option value="Orthology">Orthology</option>
                                                    <option value="Anesthesiology">Anesthesiology</option>
                                                    <option value="Ayurvedic">Ayurvedic</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <button id="singlebutton" name="singlebutton" className="new-btn-d br-2">Make An
                                                    Appointment</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="well-block">
                                <div className="well-title">
                                    <h2>Why Appointment with Us</h2>
                                </div>
                                <div className="feature-block">
                                    <div className="feature feature-blurb-text">
                                        <h4 className="feature-title">24/7 Hours Available</h4>
                                        <div className="feature-content">
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="feature feature-blurb-text">
                                        <h4 className="feature-title">Experienced Staff Available</h4>
                                        <div className="feature-content">
                                            <p> </p>
                                        </div>
                                    </div>
                                    <div className="feature feature-blurb-text">
                                        <h4 className="feature-title">Low Price and Fees</h4>
                                        <div className="feature-content">
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};