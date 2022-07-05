import React from "react";
import { Card, Col, Container, Image, Row, ListGroup, Accordion } from "react-bootstrap";
import Layout from "../../components/layout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FlipCountdown from '@rumess/react-flip-countdown';
import { OfferCard } from "../../components/cards";
import MultiItemCarousel from "../../components/multi_item_carousel";

const offer_data = [
    { name: "Bio Rice Almond Milk", attr: "20L", price: "5.00", state:"", image: "../../assets/images/categories/1.webp"},
    { name: "Bio Rice Almond Milk", attr: "15L", price: "15.99", state:"", image: "../../assets/images/categories/2.webp"},
    { name: "Bio Rice Almond Milk", attr: "1Kg", price: "3.99", state:"", image: "../../assets/images/categories/3.webp"},
    { name: "Bio Rice Almond Milk", attr: "100g", price: "7.99", state:"", image: "../../assets/images/categories/4.webp"},
    { name: "Bio Rice Almond Milk", attr: "50Kg", price: "20.00", state:"", image: "../../assets/images/categories/5.webp"},
    { name: "Bio Rice Almond Milk", attr: "10Kg", price: "50.99", state:"", image: "../../assets/images/categories/6.webp"},
    { name: "Bio Rice Almond Milk", attr: "500mL", price: "49.99", state:"", image: "../../assets/images/categories/7.webp"},
    { name: "Bio Rice Almond Milk", attr: "20L", price: "5.00", state:"", image: "../../assets/images/categories/1.webp"},
    { name: "Bio Rice Almond Milk", attr: "15L", price: "15.99", state:"", image: "../../assets/images/categories/2.webp"},
    { name: "Bio Rice Almond Milk", attr: "1Kg", price: "3.99", state:"", image: "../../assets/images/categories/3.webp"},
    { name: "Bio Rice Almond Milk", attr: "100g", price: "7.99", state:"", image: "../../assets/images/categories/4.webp"},
    { name: "Bio Rice Almond Milk", attr: "50Kg", price: "20.00", state:"", image: "../../assets/images/categories/5.webp"},
    { name: "Bio Rice Almond Milk", attr: "10Kg", price: "50.99", state:"", image: "../../assets/images/categories/6.webp"},
    { name: "Bio Rice Almond Milk", attr: "500mL", price: "49.99", state:"", image: "../../assets/images/categories/7.webp"},
    { name: "Bio Rice Almond Milk", attr: "20L", price: "5.00", state:"", image: "../../assets/images/categories/1.webp"},
    { name: "Bio Rice Almond Milk", attr: "15L", price: "15.99", state:"", image: "../../assets/images/categories/2.webp"},
    { name: "Bio Rice Almond Milk", attr: "1Kg", price: "3.99", state:"", image: "../../assets/images/categories/3.webp"},
    { name: "Bio Rice Almond Milk", attr: "100g", price: "7.99", state:"", image: "../../assets/images/categories/4.webp"},
    { name: "Bio Rice Almond Milk", attr: "50Kg", price: "20.00", state:"", image: "../../assets/images/categories/5.webp"},
    { name: "Bio Rice Almond Milk", attr: "10Kg", price: "50.99", state:"", image: "../../assets/images/categories/6.webp"},
    { name: "Bio Rice Almond Milk", attr: "500mL", price: "49.99", state:"", image: "../../assets/images/categories/7.webp"},
    { name: "Bio Rice Almond Milk", attr: "20L", price: "5.00", state:"", image: "../../assets/images/categories/1.webp"},
    { name: "Bio Rice Almond Milk", attr: "15L", price: "15.99", state:"", image: "../../assets/images/categories/2.webp"},
    { name: "Bio Rice Almond Milk", attr: "1Kg", price: "3.99", state:"", image: "../../assets/images/categories/3.webp"},
    { name: "Bio Rice Almond Milk", attr: "100g", price: "7.99", state:"", image: "../../assets/images/categories/4.webp"},
    { name: "Bio Rice Almond Milk", attr: "50Kg", price: "20.00", state:"", image: "../../assets/images/categories/5.webp"},
    { name: "Bio Rice Almond Milk", attr: "10Kg", price: "50.99", state:"", image: "../../assets/images/categories/6.webp"},
    { name: "Bio Rice Almond Milk", attr: "500mL", price: "49.99", state:"", image: "../../assets/images/categories/7.webp"},
    
];

const offer_responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function OfferDetailPage() {
   
  return (
    <>
        <Layout>
            <div className="banner-bg"></div>
           <Container className="mt-5 py-5 Offer-detail-page">
                <Card className="mt-5">
                    <Card.Body>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="offer-item-img">                                
                                <Carousel>
                                    <div>
                                        <img src="/assets/images/banner/buy.png" />
                                    </div>
                                    <div>
                                        <img src="/assets/images/banner/scan.png" />
                                    </div>
                                    <div>
                                        <img src="/assets/images/banner/get.png" />
                                    </div>
                                </Carousel>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="offer-item-content text-white p-5">
                                <div className="offer-item-attr">250g</div>
                                <div className="offer-item-title">Nutella Hazelnut Spred</div>
                                <div className="offer-item-barcode">Barcode : 5141522</div>
                                <div className="offer-item-text">Each jar of Nutella contains 7 carefully selected, high-quality ingredients: sugar, milk, palm oil, cocoaEach jar of Nutella contains 7 carefully selected, high-quality ingredients: sugar, milk, palm oil, cocoaEach jar of Nutella contains 7 carefully selected, high-quality ingredients: sugar, milk, palm oil, cocoa</div>
                                <div className="offer-Nutritional-info">
                                    <div className="offer-Nutritional-info-title">Nutritional Info</div>
                                    <ListGroup>
                                        <ListGroup.Item className="d-flex justify-content-between"><span>Calories : 86</span><span>7%</span></ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between"><span>Total Fat : 4.5mg</span><span>6%</span></ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between"><span>Cholesterol : 0mg</span><span>0%</span></ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between"><span>Sodium : 17mg</span><span>7%</span></ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between"><span>Potassium</span><span>10%</span></ListGroup.Item>
                                    </ListGroup>
                                </div>
                                <div className="p-3 offer-item-countdown">
                                    <div className="offer-item-countdown-text d-flex align-items-center justify-content-between"><span>Offer</span><span>Save €10</span></div>
                                    <FlipCountdown
                                    hideYear
                                    hideMonth
                                    hideDay
                                    hourTitle='Hours'
                                        minuteTitle='Minutes'
                                        secondTitle='Seconds'
                                        endAt={'2022-12-12 01:26:58'} // Date/Time
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>

                        </Row>
                    </Card.Body>
                </Card>
           </Container>

           <Container className="mt-3 Offer-detail-page">
                <Card>
                    <Card.Body>
                        <Card.Title>Offer Terms</Card.Title>
                        <Accordion >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>> Buy 2 pack Nutella 250g each</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>> Offer available at any store</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                        <Card.Title>Health Ifo</Card.Title>
                        <div class="offer-item-text">Each jar of Nutella contains 7 carefully selected, high-quality ingredients: sugar, milk, palm oil, cocoaEach jar of Nutella contains 7 carefully selected, high-quality ingredients: sugar, milk, palm oil, cocoaEach jar of Nutella contains 7 carefully selected, high-quality ingredients: sugar, milk, palm oil, cocoa</div>
                    </Card.Body>
                </Card>
           </Container>

           <Container className="mt-3 Offer-detail-page">
                <Card>
                    <Card.Body>
                        <Card.Title>Similar Products</Card.Title>
                        <MultiItemCarousel type="Offers"/>
                    </Card.Body>
                </Card>
           </Container>

           <Container className="mt-3 Offer-detail-page">
                <Card>
                    <Card.Body>
                        <Card.Title>Recipes</Card.Title>
                        <MultiItemCarousel type="Recipes"/>
                    </Card.Body>                    
                </Card>
           </Container>
        </Layout>
    </>
  );
}

export default OfferDetailPage;
