import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const TopBanner = () => {
    return (
        <div className="TopBanner">
            <div className="banner-bg"></div>
            <Container className="py-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                    <iframe src="/assets/earth/earth.htm" width="100%" height="650px" title="Earth"></iframe>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/assets/images/banner/1.png"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/assets/images/banner/1.png"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/assets/images/banner/1.png"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>            
        </div>
    );
}

export default TopBanner;