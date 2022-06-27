import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { OfferCard, LoayltyCard, CategoryCard } from "../cards";
import { SectionTitle } from "../tags/intex";

function MultiItemCarousel ({type}) {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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

    const category_responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 6
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const partner_responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    }

    const cate_data = [
        { name: "BEANS", image: "../../assets/images/categories/1.webp"},
        { name: "BERRIES", image: "../../assets/images/categories/2.webp"},
        { name: "CITRUS", image: "../../assets/images/categories/3.webp"},
        { name: "FRUTS", image: "../../assets/images/categories/4.webp"},
        { name: "MILK", image: "../../assets/images/categories/5.webp"},
        { name: "JUCIES", image: "../../assets/images/categories/6.webp"},
        { name: "LETTUCE", image: "../../assets/images/categories/7.webp"},
        { name: "MEATS", image: "../../assets/images/categories/8.webp"},
        { name: "SALADS", image: "../../assets/images/categories/9.webp"},
        { name: "VEGETABES", image: "../../assets/images/categories/1.webp"},
    ];

    const offer_data = [
        { name: "Bio Rice Almond Milk", attr: "20L", price: "5.00", state:"", image: "../../assets/images/categories/1.webp"},
        { name: "Bio Rice Almond Milk", attr: "15L", price: "15.99", state:"", image: "../../assets/images/categories/2.webp"},
        { name: "Bio Rice Almond Milk", attr: "1Kg", price: "3.99", state:"", image: "../../assets/images/categories/3.webp"},
        { name: "Bio Rice Almond Milk", attr: "100g", price: "7.99", state:"", image: "../../assets/images/categories/4.webp"},
        { name: "Bio Rice Almond Milk", attr: "50Kg", price: "20.00", state:"", image: "../../assets/images/categories/5.webp"},
        { name: "Bio Rice Almond Milk", attr: "10Kg", price: "50.99", state:"", image: "../../assets/images/categories/6.webp"},
        { name: "Bio Rice Almond Milk", attr: "500mL", price: "49.99", state:"", image: "../../assets/images/categories/7.webp"},
        
    ];

    const partner_data = [
        {image: '/assets/images/banner/partner/1.webp'},
        {image: '/assets/images/banner/partner/2.webp'},
        {image: '/assets/images/banner/partner/3.webp'},
        {image: '/assets/images/banner/partner/4.webp'},
        {image: '/assets/images/banner/partner/5.webp'},
        {image: '/assets/images/banner/partner/6.webp'},
        {image: '/assets/images/banner/partner/7.webp'},
        {image: '/assets/images/banner/partner/8.webp'},
        {image: '/assets/images/banner/partner/9.webp'},
        
    ];

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

    const [lastActived, setLastActived] = useState(-1);

    switch (type) {
        case 'Offers':
            return (
                <section>
                  <Container className="MultiItemCarousel">
                     <SectionTitle className="my-2">{type}</SectionTitle>
                     <Carousel responsive={offer_responsive}>
                        {offer_data.map((item, index) => (
                                <OfferCard  key={index} offer_name={item.name} offer_image={item.image} offer_attr={item.attr} offer_price={item.price}/>
                        ))}
                     </Carousel>
                 </Container>     
                </section>   
             )
        case 'Category':
            return (
                <section>
                    <Container className="MultiItemCarousel">
                        <SectionTitle className="my-2">{type}</SectionTitle>
                        <Carousel responsive={category_responsive}>
                            {cate_data.map((item, index) => (
                                <CategoryCard actived={lastActived} setActived={setLastActived} key={index} data={index} cate_name={item.name} cate_image={item.image} />
                            ))}
                        </Carousel>
                    </Container>     
                </section>   
            )  
        case 'Loyalty':
            return (
                <section>
                    <Container className="MultiItemCarousel">
                        <SectionTitle className="my-2">{type}</SectionTitle>
                        <Carousel responsive={responsive}>
                            {loyalty_data.map((item, index) => (
                                <LoayltyCard key={index} loy_name={item.name} loy_image={item.image}/>
                            ))}
                        </Carousel>
                    </Container>     
                </section>   
            )
        case 'Partner':
            return (
                <section>
                    <Container className="MultiItemCarousel">
                        <SectionTitle className="my-2">{type}</SectionTitle>
                        <Carousel autoPlay="true" responsive={partner_responsive}>
                            {partner_data.map((item, index) => (
                                <div className="partner-img"  key={index}>
                                    <Image src={item.image}/>
                                </div>
                            ))}
                        </Carousel>
                    </Container>     
                </section>   
            )                 
    
        default:
            break;
    }
    
}

export default MultiItemCarousel;