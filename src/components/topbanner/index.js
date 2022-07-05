import React from "react";
import { Carousel, Col, Container, Row, Image } from "react-bootstrap";

const TopBanner = () => {
    return (
        <div className="TopBanner">
            <div className="banner-bg"></div>
            <Container className="py-5">
                <Row>
                    <Col lg={8} md={8} sm={12}>
                    <iframe src="/assets/earth/earth.htm" width="100%" height="850px" title="Earth"></iframe>
                    </Col>
                    <Col lg={4} md={4} sm={12} className="top-work-slider">
                        <Carousel>
                            <Carousel.Item>
                                <Carousel.Caption className="py-5">
                                    <h1 className="mt-5">BUY</h1>
                                    <p>Buy the items you see on our app from any shop!</p>
                                    <Image src="/assets/images/banner/buy.png"/>                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption className="py-5">
                                    <h1 className="mt-5">SCAN</h1>
                                    <p>Scan your receipt an upload it so we can verify your purchase.</p>
                                    <Image src="/assets/images/banner/scan.png"/>                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption className="py-5">
                                    <h1 className="mt-5">GET</h1>
                                    <p>Get your money directly to your personal bank account.</p>
                                    <Image src="/assets/images/banner/get.png"/>                                
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