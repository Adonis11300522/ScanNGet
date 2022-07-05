import React from "react";
import { Col, Container, Row, Card, Image, Nav, ListGroup } from "react-bootstrap";
import Layout from "../../components/layout";
import BG from '../../assets/images/banner/scannget.png';

const flyers_data = [
    {image: '/assets/images/logo', name: 'Shop Name', date:"15 May 2022"},
    {image: '/assets/images/logo', name: 'Shop Name', date:"15 May 2022"},
    {image: '/assets/images/logo', name: 'Shop Name', date:"15 May 2022"},
    {image: '/assets/images/logo', name: 'Shop Name', date:"15 May 2022"},
    {image: '/assets/images/logo', name: 'Shop Name', date:"15 May 2022"},
    {image: '/assets/images/logo', name: 'Shop Name', date:"15 May 2022"},
    {image: '/assets/images/logo', name: 'Shop Name', date:"15 May 2022"},
]

function Flyers() {
  return (
    <>
        <Layout>
            <div className="banner-bg"></div>
            <Container>
                <Row className="mt-5 page-section-title mb-5">

                </Row>
                <Row>
                    <Col lg={3} md={3} sm={12}>
                        <Card className="mt-3">
                            <Card.Body>
                                <div className="scannget-banner-bg text-center py-4 rounded mb-3" style={{background: `url('${BG}')`}}>
                                    <Image src="/assets/images/logo.png" width="150"/>
                                    <h3 className="text-white">Scannget</h3>
                                </div>
                                <Nav.Link href=""><Image src="/assets/images/banner/google_play.webp" width="100%"/></Nav.Link>
                                <Nav.Link href=""><Image src="/assets/images/banner/app_store.webp" width="100%"/></Nav.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={9} md={9} sm={12} className="mt-3">
                        <ListGroup variant="flush" className="flyers-list">
                            {
                                flyers_data.map((item)=> (
                                    <ListGroup.Item className="flyer-item">
                                        <Row className="align-items-center">
                                            <Col lg={1} md={1} sm={1}>
                                                <Image src="/assets/images/logo.png"/>
                                            </Col>
                                            <Col lg={10} md={10} sm={10} className="row flex-column align-items-center">
                                                <h4>Shop Name</h4>
                                                <p>Valid until 15 Aug 2021</p>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))
                            }                            
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </Layout>
    </>
  );
}

export default Flyers;
