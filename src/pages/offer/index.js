import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { OfferCard } from "../../components/cards";
import Categories from "../../components/category";
import Layout from "../../components/layout";
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
