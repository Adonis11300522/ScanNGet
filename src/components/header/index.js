import React, { useState } from "react";
import {Navbar, Nav, Container, Image, Modal, Form, Button, Row, Col} from 'react-bootstrap';
import Logo from '../../assets/images/logo.png';

function Header () {
    const [inShow, setInShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }
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
                        {/* <Nav.Link href="" className="px-2 mx-3 text-center">Surveys</Nav.Link> */}
                        <Nav.Link href="/flyers" className="px-2 mx-3 text-center">Flyers</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="" className="px-2 mx-3 text-center" onClick={() => setInShow(true)}>Sign In</Nav.Link>
                        <Nav.Link href="" className="px-2 mx-3 text-center">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal
                size="lg"
                show={inShow}
                onHide={() => setInShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                centered
            >                
                <Modal.Body className="overflow-hidden">
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <div className="logo-image text-center">
                                    <Image src="/assets/images/logo.png" width="100"/>
                                    <h4>Welcome ScanNGet!</h4>
                                </div>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group controlId="validationCustom01" className="mb-3">
                                            <Form.Label>User Name</Form.Label>
                                            <Form.Control required type="email" placeholder="User Name"/>
                                            <Form.Control.Feedback type="invalid">Please input a valid User Name!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="validationCustom02"  className="mb-3">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control required type="password" placeholder="Password"/>
                                            <Form.Control.Feedback type="invalid">Please input a valid Password!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
                                        <Form.Check
                                            required
                                            label="Remember Me!"
                                            />
                                        <Nav.Link>Forgot Password?</Nav.Link>    
                                        </Form.Group>
                                        <Button type="submit">Sign In</Button>
                                        <div className="text-center my-3">or Sign In with</div>
                                        <Button className="mb-3" type="submit">Sign In</Button>
                                        <Button className="mb-3" type="submit">Sign In</Button>
                                        <Button className="mb-3" type="submit">Sign In</Button>
                                    </Row>
                                </Form>
                            </Col>
                            <Col lg={6} md={6}>
                                <Image src="/assets/images/banner/3.webp"/>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>        
    );
}

export default Header;