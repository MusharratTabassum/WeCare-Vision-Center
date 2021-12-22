import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { user, logOut, name, photo } = useAuth();
    return (
        <div>
            <Navbar className="header" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container fluid>
                    <Link className="navbar-brand banner-logo ms-5" to="/">
                        WeCare
                        <small>A Solution Of Your Vision</small></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="nav-links nav-text" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="header" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="header" as={HashLink} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link className="header" as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link className="header" as={Link} to="/contact">Contact</Nav.Link>

                        <Nav.Link className="header">
                            {user?.email ?
                                <Button onClick={logOut} className='logout-btn' variant="light">Logout</Button> :
                                <Nav.Link className='header' as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav.Link>
                        <Navbar.Text>
                            <Link to="/" className="header">{user?.displayName || name.displayName}</Link>
                        </Navbar.Text>
                        <img
                            src={user.photoURL || name.photoURL}
                            width="35"
                            height="45"
                            alt=""
                            className="user-img"
                        />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;