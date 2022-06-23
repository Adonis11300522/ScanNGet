import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IntroBanner } from "../../components/banners/intro_banner";
import { LoayltyCard } from "../../components/cards";
import Layout from "../../components/layout";
function LoyaltyPage() {
    const loyalty_data = [
        {name:"Alphamega", image:"/assets/images/banner/buy.webp"},
        {name:"Alphamega", image:"/assets/images/banner/buy.webp"},
        {name:"Alphamega", image:"/assets/images/banner/buy.webp"},
        {name:"Alphamega", image:"/assets/images/banner/buy.webp"},
        {name:"Alphamega", image:"/assets/images/banner/buy.webp"},
        {name:"Alphamega", image:"/assets/images/banner/buy.webp"},
        {name:"Alphamega", image:"/assets/images/banner/buy.webp"},
        {name:"Alphamega", image:"/assets/images/banner/buy.webp"},
    ];
  return (
    <>
        <Layout>
            <div className="banner-bg"></div>
            <IntroBanner className="mt-5"/>
            <Container>
                <Row>
                    {loyalty_data.map((item, index) => (
                        <Col lg={4} md={4} sm={12} className="my-3">
                            <LoayltyCard loy_name={item.name} loy_image={item.image}/>
                        </Col>                        
                    ))}
                </Row>
            </Container>
        </Layout>
    </>
  );
}

export default LoyaltyPage;
