import React from "react";
import { Card, Col, Container, Image, Row, ListGroup, Accordion } from "react-bootstrap";
import Layout from "../../components/layout";
import { loyaltyCard, OfferCard } from "../../components/cards";
import MultiItemCarousel from "../../components/multi_item_carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const product_data = [
    { name: "Bio Rice Almond Milk", attr: "20L", price: "5.00", state:"", image: "../../assets/images/categories/1.webp"},
    { name: "Bio Rice Almond Milk", attr: "15L", price: "15.99", state:"", image: "../../assets/images/categories/2.webp"},
    { name: "Bio Rice Almond Milk", attr: "1Kg", price: "3.99", state:"", image: "../../assets/images/categories/3.webp"},
    { name: "Bio Rice Almond Milk", attr: "100g", price: "7.99", state:"", image: "../../assets/images/categories/4.webp"},
    { name: "Bio Rice Almond Milk", attr: "50Kg", price: "20.00", state:"", image: "../../assets/images/categories/5.webp"},
    { name: "Bio Rice Almond Milk", attr: "10Kg", price: "50.99", state:"", image: "../../assets/images/categories/6.webp"},
    { name: "Bio Rice Almond Milk", attr: "500mL", price: "49.99", state:"", image: "../../assets/images/categories/7.webp"},
    
];

const value_data = [
    {image: '/assets/images/categories/5.webp'},
    {image: '/assets/images/categories/5.webp'},
    {image: '/assets/images/categories/5.webp'},
    {image: '/assets/images/categories/5.webp'},
    {image: '/assets/images/categories/5.webp'},
    {image: '/assets/images/categories/5.webp'},
];

function LoyaltyDetailPage() {
   
  return (
    <>
        <Layout>
            <div className="banner-bg"></div>
           <Container className="mt-5 py-5 loyalty-detail-page">
                <Card className="mt-5">
                    <Card.Body>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="loyalty-item-img">                                
                                <Image src="/assets/images/banner/get.png"/>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="loyalty-item-content text-white p-5">
                                <div className="loyalty-item-title">Alphamega</div>
                                <div className="loyalty-item-text">Each jar of Nutella contains 7 carefully selected, high-quality ingredients: sugar, milk, palm oil, cocoaEach jar of Nutella contains 7 carefully selected, high-quality ingredients: sugar, milk, palm oil, cocoaEach jar of Nutella contains 7 carefully selected, high-quality ingredients: sugar, milk, palm oil, cocoa</div>
                                <div className="loyalty-item-product">Products</div>
                                <Carousel responsive={responsive}>
                                    {product_data.map((item, index) => (
                                            <OfferCard className="text-gray"  key={index} offer_name={item.name} offer_image={item.image} offer_attr={item.attr} offer_price={item.price}/>
                                    ))}
                                </Carousel>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
           </Container>

           <Container className="mt-3 loyalty-detail-page">
                <Card>
                    <Card.Body>
                        <Card.Title>loyalty Programs</Card.Title>
                        <div className="loyalty-item-text">Each jar of Nutella contains 7 carefully selected, high-quality ingredients: sugart, milk, palm oil, cocoa Each jar of Nutella contains 7 carefully selected, hight-quality ingredients:sugart, milk, palm oil, cocoa</div>
                    </Card.Body>
                </Card>
           </Container>

           <Container className="mt-3 loyalty-detail-page">
                <Card>
                    <Card.Body>
                        <Card.Title>Our Values</Card.Title>
                        <div className="loyalty-item-text">Each jar of Nutella contains 7 carefully selected, high-quality ingredients: sugart, milk, palm oil, cocoa Each jar of Nutella contains 7 carefully selected, hight-quality ingredients:sugart, milk, palm oil, cocoa</div>
                        <div className="loyalty-item-value d-flex justify-content-around my-3">
                            {value_data.map((item) => (
                                <Image className="border rounded-3" src={item.image}/>
                            )) }
                        </div>
                    </Card.Body>
                </Card>
           </Container>


           <Container className="mt-3 loyalty-detail-page">
                <Card>
                    <Card.Body>
                        <Card.Title>Our History</Card.Title>
                        <div className="loyalty-item-text">Each jar of Nutella contains 7 carefully selected, high-quality ingredients: sugart, milk, palm oil, cocoa Each jar of Nutella contains 7 carefully selected, hight-quality ingredients:sugart, milk, palm oil, cocoa</div>
                    </Card.Body>
                </Card>
           </Container>
        </Layout>
    </>
  );
}

export default LoyaltyDetailPage;
