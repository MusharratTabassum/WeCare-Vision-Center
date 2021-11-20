import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark header">
                <div class="container-fluid ms-4">
                    <Link class="navbar-brand banner-logo" to="/">
                        weCare
                        <small>A Solution Of Your Vision</small></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav-text">
                            <li class="nav-item me-3">
                                <Link class="nav-link active items" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item me-3">
                                <Link class="nav-link active items" aria-current="page" to="/service">Service</Link>
                            </li>
                            <li class="nav-item me-3">
                                <Link class="nav-link active items" aria-current="page" to="/about">About Us</Link>
                            </li>

                            <li class="nav-item me-3">
                                <Link class="nav-link active items" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item me-3">
                                <Link class="nav-link active items" aria-current="page" to="/login">Login</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;