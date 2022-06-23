import React from "react";
import {Navbar, Nav, Container, Image} from 'react-bootstrap';
import Logo from '../../assets/images/logo.png';

function Header () {
    return (
        <div className="Header">
            <Navbar collapseOnSelect expand="lg" className="py-3" fixed="top">
                <Container className="rounded">
                <Navbar.Brand to="/"><Image src={Logo} width="50" className="my-2"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/offers" className="px-2 mx-3 text-center">Offers</Nav.Link>
                        <Nav.Link href="/loyalties" className="px-2 mx-3 text-center">Loyalty</Nav.Link>
                        <Nav.Link href="" className="px-2 mx-3 text-center">Surveys</Nav.Link>
                        <Nav.Link href="" className="px-2 mx-3 text-center">Flyers</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="" className="px-2 mx-3 text-center">Sign In</Nav.Link>
                        <Nav.Link href="" className="px-2 mx-3 text-center">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>        
    );
}

export default Header;