import React from "react";

const Features = () => {
    return (
        <div
            className="features-section py-4"
            style={{
                background: "linear-gradient(to right, rgb(37 22 14), #8a5a44)",


            }}
        >
            <div className="container ">
               


                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div
                            className="feature-card p-4 h-100"
                            style={{
                                borderRadius: "15px",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                backgroundColor: "#fff",
                            }}
                        >
                            <h4 className="fw-semibold text-dark">Discover Perfect Matches</h4>
                            <p className="text-muted">
                                Find the ideal event venues, hosts, and service providers to match your occasion with ease.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 ">
                        <div
                            className="feature-card p-4 h-100"
                            style={{
                                borderRadius: "15px",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                backgroundColor: "#fff",
                            }}
                        >
                            <h4 className="fw-semibold text-dark">Seamless Booking</h4>
                            <p className="text-muted">
                                Book services effortlessly with instant confirmations and real-time availability.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div
                            className="feature-card p-4 h-100"
                            style={{
                                borderRadius: "15px",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                backgroundColor: "#fff",
                            }}
                        >
                            <h4 className="fw-semibold text-dark">Customizable Options</h4>
                            <p className="text-muted">
                                Tailor your event to perfection with a wide range of customizable options and preferences.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div
                            className="feature-card p-4 h-100"
                            style={{
                                borderRadius: "15px",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                backgroundColor: "#fff",
                            }}
                        >
                            <h4 className="fw-semibold text-dark">Real-Time Notifications</h4>
                            <p className="text-muted">
                                Get instant notifications for bookings, updates, and event reminders to stay on top of everything.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div
                            className="feature-card p-4 h-100"
                            style={{
                                borderRadius: "15px",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                backgroundColor: "#fff",
                            }}
                        >
                            <h4 className="fw-semibold text-dark">Secure Payments</h4>
                            <p className="text-muted">
                                Enjoy hassle-free, secure payments for all bookings and transactions, making your experience smooth.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div
                            className="feature-card p-4 h-100"
                            style={{
                                borderRadius: "15px",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                backgroundColor: "#fff",
                            }}
                        >
                            <h4 className="fw-semibold text-dark">24/7 Customer Support</h4>
                            <p className="text-muted">
                                Our dedicated support team is available round-the-clock to assist you with any questions or issues.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
