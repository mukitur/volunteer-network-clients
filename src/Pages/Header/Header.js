import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Button } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand as = {Link} to="/"><img src={logo} width="100%" height="60" alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fs-5">
                        <Nav.Link as = {Link} to ="/home">Home</Nav.Link>
                        <Nav.Link as = {Link} to ="/events">Events</Nav.Link>
                        <Nav.Link as = {Link} to ="/donation">Donation</Nav.Link>
                        <Nav.Link as = {Link} to ="/blogs">Bolgs</Nav.Link>
                        <Nav.Link as = {Link} to ="/addevents">Add Events</Nav.Link>
                        
                    </Nav>
                    <Nav className="fs-6">
                       {/*  {
                            user?.email ?
                            <Button className="me-2" onClick={logout} variant="light">LogOut</Button> :
                            <Nav.Link as = {Link} eventKey={2} to="/login">Login/Register</Nav.Link>
                        } */}
                        <Navbar.Text>Signed in as: <a href="#login">{/* {user?.displayName} */}</a></Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;