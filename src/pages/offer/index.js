import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { OfferCard } from "../../components/cards";
import Categories from "../../components/category";
import Layout from "../../components/layout";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function OfferPage() {
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
  return (
    <>
        <Layout>
            <div className="banner-bg"></div>
            <Carousel className="offers-slider container">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <Image src="assets/images/banner/man1.png"/>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="py-5">
                        sdfsdfsdf
                    </Col>
                </Row>
            </Carousel>
            <Categories/>
            <Container>
                <div className="banner-title">Beverages</div>
                <Row>
                {offer_data.map((item, index) => (
                    <Col lg={3} md={3} sm={4} className="my-2">
                        <OfferCard offer_name={item.name} offer_image={item.image} offer_attr={item.attr} offer_price={item.price}/>
                    </Col>
                ))}
                </Row>
            </Container>
        </Layout>
    </>
  );
}

export default OfferPage;
