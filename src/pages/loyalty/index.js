import React, {useState, useEffect} from "react";
import { Col, Container, Row, Image, Card, Nav } from "react-bootstrap";
import { IntroBanner } from "../../components/banners/intro_banner";
import { LoayltyCard } from "../../components/cards";
import { Carousel } from 'react-responsive-carousel';
import Layout from "../../components/layout";
import BG from '../../assets/images/banner/scannget.png';
import ReactPaginate from 'react-paginate';

function Items({currentItems}) {
    return (
        <>
          {currentItems &&
            currentItems.map((item) => (
                <Col lg={6} md={6} sm={12} className="my-2">
                    <Nav.Link href="/loyalties/detail"><LoayltyCard loy_name={item.name} loy_image={item.image} offer_attr={item.attr} offer_price={item.price}/></Nav.Link>
                </Col>
            ))}
        </>
      );
}

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

function LoyaltyPage() {   

    const itemsPerPage = 20;

    const [min, setMin] = useState(200);
    const [max, setMax] = useState(1700);

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(loyalty_data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(loyalty_data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % loyalty_data.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

  return (
    <>
        <Layout>
            <div className="banner-bg"></div>
            <Container>
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
                <Row>
                    <Col lg={3} md={3} sm={12} className="search_bar">
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

export default LoyaltyPage;
