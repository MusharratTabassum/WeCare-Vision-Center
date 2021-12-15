import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar className="header" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container fluid>
                    <Link className="navbar-brand banner-logo ms-5" to="/">
                        WeCare
                        <small>A Solution Of Your Vision</small></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="nav-links nav-text" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="header" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="header" as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link className="header" as={Link} to="/contact">Contact</Nav.Link>
                        <Navbar.Text>
                            <Link to="/" className="header" to="#login">{user?.displayName}</Link>
                        </Navbar.Text>
                        <img
                            src={user.photoURL}
                            width="35"
                            height="45"
                            alt=""
                            className="user-img"
                        />
                        <Nav.Link className="header">
                            {user?.email ?
                                <Button onClick={logOut} variant="light">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;