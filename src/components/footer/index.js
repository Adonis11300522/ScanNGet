import React from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";

function Footer() {
    return (
        <section className="Footer py-5 mt-5" style={{background: "url('/assets/images/banner/footer.jpg')"}}>
          <Container>
            <Row>
              <Col lg={3} md={3} sm={12} className="border-end text-white">
                <Image src="/assets/images/logo.png" className="mb-2" width="50"/>
                <p>18 Ezekia Papaioannou Str, Office 104, 1075, Nicosia, CY</p>
                <p>support@scannget.com</p>
              </Col>
              <Col lg={3} md={3} sm={12} className="border-end">
                <div className="footer-title">GET IN TOUCH</div>
                <Nav.Link className="text-white text-center">Customer Support</Nav.Link>
                <Nav.Link className="text-white text-center">Customer Support</Nav.Link>
                <Nav.Link className="text-white text-center">Customer Support</Nav.Link>
                <Nav.Link className="text-white text-center">Customer Support</Nav.Link>
              </Col>
              <Col lg={3} md={3} sm={12} className="border-end">
                <div className="footer-title">GET IN TOUCH</div>
                  <Nav.Link className="text-white text-center">About Us</Nav.Link>
                  <Nav.Link className="text-white text-center">Privacy Policy</Nav.Link>
                  <Nav.Link className="text-white text-center">Terms & condition</Nav.Link>
                  <Nav.Link className="text-white text-center">Brands</Nav.Link>
                </Col>
              <Col lg={3} md={3} sm={12} className="row text-center">
                <div className="footer-title">GET IN TOUCH</div>
                  <Col lg={4} md={4} sm={12} className="text-center">
                    <Image src="/assets/images/banner/1.webp" className="mb-2" width="100%"/>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Image src="/assets/images/banner/2.webp" className="mb-2" width="100%"/>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Image src="/assets/images/banner/3.webp" className="mb-2" width="100%"/>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Image src="/assets/images/banner/4.webp" className="mb-2" width="100%"/>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Image src="/assets/images/banner/5.webp" className="mb-2" width="100%"/>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Image src="/assets/images/banner/6.webp" className="mb-2" width="100%"/>
                  </Col>
              </Col>
            </Row>
            <Row className="border-top mt-3 text-white justify-content-between">
              <Col lg={4} md={4} sm={12} className="mt-3">Copyright © 2022 ScanNGet - All Rights Reserved.</Col>
              <Col lg={4} md={4} sm={12} className="mt-3 text-end">Powered By 3Y Connect</Col>
            </Row>
          </Container>
        </section>
    );
}

export default Footer;