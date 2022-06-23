import React from "react";
import { Button, Col, Container, Image, Nav, Row, Form } from "react-bootstrap";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import MultiItemCarousel from "../multi_item_carousel";

export function IntroBanner() {
    return (
        <section className="IntroBanner">
          <Container>
            <Row>
                <Col lg={6} md={6} sm={12} className="p-4 pl-0">
                    <div className="intro-banner-body p-4 h-100">
                        <div className="intro-banner-title mb-2">CashBack</div>
                        <div className="intro-banner-text text-white">Get Cashback on Your Favorite Grocery Brands.<br/>The <strong>ONLY</strong> platform in Cyprus offering direct promotions from manufactuers and suppliers.</div>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} className="p-4 pr-0">
                    <div className="intro-banner-body p-4 h-100">
                        <div className="intro-banner-title mb-2">Save Money</div>
                        <div className="intro-banner-text text-white">Save money on daily shopping for all of our promotions in the app from your favorite stores and supermarkets.</div>
                    </div>
                </Col>
            </Row>
          </Container>
        </section>
    );
}


export function WorkBanner () {
    return(
        <section className="WorkBanner">
            <Container className="text-center text-white py-3">
                <Row>
                    <Col lg={4} md={4} sm={12} className="p-2">
                        <Image width="50%" className="rounded-circle shadow-lg mb-4" src="/assets/images/banner/buy.webp"/>
                        <h4>Buy</h4>
                        <p>Buy the items you see on our app from any shop!</p>
                    </Col>
                    <Col lg={4} md={4} sm={12} className="p-2">
                    <Image width="50%" className="rounded-circle shadow-lg mb-4" src="/assets/images/banner/scan.webp"/>
                        <h4>Scan</h4>
                        <p>Scan your receipt an upload it so we can verify your purchase.</p>
                    </Col>
                    <Col lg={4} md={4} sm={12} className="p-2">
                    <Image width="50%" className="rounded-circle shadow-lg mb-4" src="/assets/images/banner/get.webp"/>
                        <h4>Get</h4>
                        <p>Get your money directly to your perrsonal bank account.</p>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export function DownloadBanner () {
    return (
        <section className="DownloadBanner">
            <Container>
                <Row className="shadow-lg text-white text-center">
                    <Col lg={3} md={3} sm={12} className="p-3 d-flex flex-column justify-content-around align-items-center">
                        <Image width="40%" className="rounded-circle shadow-lg mb-4" src="/assets/images/banner/buy.webp"/>
                        <h4>It's lightning-fast</h4>
                    </Col>
                    <Col lg={3} md={3} sm={12} className="p-3 d-flex flex-column justify-content-around align-items-center">
                        <Image width="40%" className="rounded-circle shadow-lg mb-4" src="/assets/images/banner/scan.webp"/>
                        <h4>It's smart</h4>
                    </Col>
                    <Col lg={3} md={3} sm={12} className="p-3 d-flex flex-column justify-content-around align-items-center">
                        <Image width="40%" className="rounded-circle shadow-lg mb-4" src="/assets/images/banner/get.webp"/>
                        <h4>It's always getting better</h4>
                    </Col>
                    <Col lg={3} md={3} sm={12} className="p-3 d-flex flex-column download-section">
                        <Nav.Link><Image src="/assets/images/banner/google_play.webp"/></Nav.Link>
                        <Nav.Link><Image src="/assets/images/banner/app_store.webp"/></Nav.Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export function PartnerBanner() {
    return(
        <section className="PartnerBanner">
            <MultiItemCarousel type="Partner"/>
        </section>
    )
}

export function SubscribeBanner () {
    return (
        <section className="SubscribeBanner py-5">
            <Container>
                <Row className="d-flex justify-content-center text-center text-white">
                    <Col lg={6} md={6} sm={12}>
                        <h4>NEWSLETTER</h4>
                        <h1>GET DISCOUNT 30% OFF</h1>
                        <div className="text-center">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Button className="px-5 py-2" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}