import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-area ">
                <footer className=" pt-100 pb-70 container ">
                    <div className="footer-item">
                        <div>
                            <h3>Opening Hours</h3>
                            <ul>
                                <li>
                                    Sun:
                                    <span>09: 00 AM - 09: 00 PM</span>
                                </li>
                                <li>
                                    Mon:
                                    <span>09: 00 AM - 09: 00 PM</span>
                                </li>
                                <li>
                                    Tue:
                                    <span>09: 00 AM - 09: 00 PM</span>
                                </li>
                                <li>
                                    Wed:
                                    <span>09: 00 AM - 09: 00 PM</span>
                                </li>
                                <li>
                                    Thu:
                                    <span>09: 00 AM - 09: 00 PM</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=" footer-links footer-item">
                        <h3>Support</h3>
                        <ul>
                            <li>
                                <Link className="link-undo" to="/contact">Online Support</Link>
                            </li>
                            <li>
                                <Link className="link-undo" to="/contact">Free Consultancy</Link>
                            </li>
                            <li>
                                <Link className="link-undo" to="/contact">24/7 Service</Link>
                            </li>
                            <li>
                                <Link className="link-undo" to="/contact">Make Call</Link>
                            </li>
                            <li>
                                <Link className="link-undo" to="/contact">Contact Support</Link>
                            </li>
                        </ul>

                    </div>
                    <div className="footer-item footer-links">
                        <h3>Explore</h3>
                        <ul>
                            <li>
                                <a to="blog.html">Blog</a>
                            </li>
                            <li>
                                <a to="appointment.html">Appointment</a>
                            </li>
                            <li>
                                <a to="shop.html">Shop</a>
                            </li>
                            <li>
                                <a to="doctor-details.html">Portfolio</a>
                            </li>
                            <li>
                                <a to="contact.html">Support</a>
                            </li>
                        </ul>

                    </div>
                    <div className="footer-links footer-item">
                        <h3>About</h3>
                        <ul>
                            <li>
                                <a to="doctors.html">Doctors</a>
                            </li>
                            <li>
                                <a to="about.html">About</a>
                            </li>
                            <li>
                                <a to="services.html">Services</a>
                            </li>
                            <li>
                                <a to="doctors.html">Departments</a>
                            </li>
                            <li>
                                <a to="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-contact footer-item ">
                        <h3>Contact</h3>
                        <ul>
                            <li>
                                <span>Phone</span>
                                <h6>882-569-756</h6>
                            </li>
                            <li>
                                <span>Email</span>
                                <h6>hello@wecare.com</h6>
                            </li>
                            <li>
                                <span>Address</span>
                                <h6>123,westeen Road,Melbourne Australia</h6>
                            </li>
                        </ul>
                    </div>
                </footer >

            </div >

            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h6>Copyright ©2021 weCare. </h6>
                            <h6>Developed By Musharrat Tabassum</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Footer;