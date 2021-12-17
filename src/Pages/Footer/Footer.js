import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {

    return (
        <div>
            <div className="footer-area ">
                <footer className=" pt-100 pb-70 container">
                    <div className=" row">
                        <div className="footer-item col-lg-3 col-md-6 ">
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
                        <div className=" footer-links footer-item col-lg-2 col-md-6  ">
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
                        <div className="footer-item footer-links col-lg-2">
                            <h3>Explore</h3>
                            <ul>
                                <li>
                                    <Link className="link-undo" to="/">Blog</Link>
                                </li>
                                <li>
                                    <Link className="link-undo" to="/contact">Appointment</Link>
                                </li>
                                <li>
                                    <Link className="link-undo" to="/">Shop</Link>
                                </li>
                                <li>
                                    <Link className="link-undo" to="/doctors">Portfolio</Link>
                                </li>
                                <li>
                                    <Link className="link-undo" to="/contact">Support</Link>
                                </li>
                            </ul>

                        </div>
                        <div className="footer-links footer-item col-lg-2">
                            <h3>About</h3>
                            <ul>
                                <li>
                                    <Link className="link-undo" to="/doctors">Doctors</Link>
                                </li>
                                <li>
                                    <Link className="link-undo" to="/about">About</Link>
                                </li>
                                <li>
                                    <Link className="link-undo" to="/home#services">Services</Link>
                                </li>
                                <li>
                                    <Link className="link-undo" to="/doctors">Departments</Link>
                                </li>
                                <li>
                                    <Link className="link-undo" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-contact footer-item col-lg-3 ">
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
                    </div>

                </footer >

            </div >

            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <small>Copyright ©2021 weCare. | </small>
                            <small>
                                Developed By Musharrat Tabassum
                            </small>

                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Footer;