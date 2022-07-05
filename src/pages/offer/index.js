import React, { useState, useEffect } from "react";
import { Col, Container, Row, Image, Card, Form, InputGroup, FormControl, Nav } from "react-bootstrap";
import { OfferCard } from "../../components/cards";
import Categories from "../../components/category";
import Layout from "../../components/layout";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {FaSearch} from "react-icons/fa";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import BG from '../../assets/images/banner/scannget.png';
import ReactPaginate from 'react-paginate';

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

function Items({currentItems}) {
    return (
        <>
          {currentItems &&
            currentItems.map((item) => (
                <Col lg={3} md={3} sm={4} className="my-2">
                    <Nav.Link href="/offers/detail"><OfferCard offer_name={item.name} offer_image={item.image} offer_attr={item.attr} offer_price={item.price}/></Nav.Link>
                </Col>
            ))}
        </>
      );
}

function OfferPage() {
   
    const itemsPerPage = 20;

    const [min, setMin] = useState(200);
    const [max, setMax] = useState(1700);

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(offer_data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(offer_data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % offer_data.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };


  return (
    <>
        <Layout>
            <div className="banner-bg"></div>
            <Carousel className="offers-slider container">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <Image src="assets/images/banner/man1.png"/>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="p-5 text-white">
                        <h1 className="mb-5 mt-1">SUPER EASY, SAVE MONEY</h1>
                        <p className="text-left">If you're looking for a fantastic NEW and SUPER EASY way to SAVE MONEY on your gorocery shopping, then Scan N Get is the app fo you. <br/>
                        It brings GENEROUS savings on the brands you love DIRECTLY from the manufactures at a PRESS OF A BUTTON.</p>
                        <p className="text-left">If you're looking for a fantastic NEW and SUPER EASY way to SAVE MONEY on your gorocery shopping, then Scan N Get is the app fo you. <br/>
                        It brings GENEROUS savings on the brands you love DIRECTLY from the manufactures at a PRESS OF A BUTTON.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <Image src="assets/images/banner/man1.png"/>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="p-5 text-white">
                        <h1 className="mb-5 mt-1">SUPER EASY, SAVE MONEY</h1>
                        <p className="text-left">If you're looking for a fantastic NEW and SUPER EASY way to SAVE MONEY on your gorocery shopping, then Scan N Get is the app fo you. <br/>
                        It brings GENEROUS savings on the brands you love DIRECTLY from the manufactures at a PRESS OF A BUTTON.</p>
                        <p className="text-left">If you're looking for a fantastic NEW and SUPER EASY way to SAVE MONEY on your gorocery shopping, then Scan N Get is the app fo you. <br/>
                        It brings GENEROUS savings on the brands you love DIRECTLY from the manufactures at a PRESS OF A BUTTON.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12} className="p-3">
                        <Image src="assets/images/banner/man1.png"/>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="p-5 text-white">
                        <h1 className="mb-5 mt-1">SUPER EASY, SAVE MONEY</h1>
                        <p className="text-left">If you're looking for a fantastic NEW and SUPER EASY way to SAVE MONEY on your gorocery shopping, then Scan N Get is the app fo you. <br/>
                        It brings GENEROUS savings on the brands you love DIRECTLY from the manufactures at a PRESS OF A BUTTON.</p>
                        <p className="text-left">If you're looking for a fantastic NEW and SUPER EASY way to SAVE MONEY on your gorocery shopping, then Scan N Get is the app fo you. <br/>
                        It brings GENEROUS savings on the brands you love DIRECTLY from the manufactures at a PRESS OF A BUTTON.</p>
                    </Col>
                </Row>
            </Carousel>
            <Categories/>
            <Container>
                <div className="banner-title">Beverages</div>
                <Row>
                    <Col lg={3} md={3} sm={12} className="search_bar">
                        <Card  className="bg-white shadow rounded mb-3">
                            <Card.Body>
                                <Form>
                                    <InputGroup className="mb-3">                                        
                                        <FormControl
                                        placeholder="Search for products"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        />
                                        <InputGroup.Text id="basic-addon1"><FaSearch/></InputGroup.Text>
                                    </InputGroup>
                                    <div className="filter_price rounded">
                                        <h6>Filter by price</h6>
                                        <InputRange className="my-3"
                                    maxValue={2000}
                                    minValue={0}
                                    value={{min: min, max: max}}
                                    onChange={value => {
                                        setMax(value.max)
                                        setMin(value.min)
                                    }} />
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
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
                    <Col lg={9} md={9} sm={12} className="row offers-item">
                    <Items currentItems={currentItems} />
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                        />
                    </Col>                
                </Row>
            </Container>
        </Layout>
    </>
  );
}

export default OfferPage;
