import React, { useState } from "react";
import {Card, Image, Nav, Button} from "react-bootstrap";
import { FaListUl } from 'react-icons/fa';
import { BsHeart } from "react-icons/bs";

export function OfferCard({offer_name, offer_image, offer_attr, offer_price}) {
    return (
        <div className="OfferCard">
            <Card className="mx-auto shadow " style={{ width: '13rem' }}>
                <div className="text-center position-relative">
                    <Card.Img variant="top" src={offer_image}/>
                    <Nav.Link href="" className="scan-icon position-absolute end-0 mb-4"><FaListUl/></Nav.Link>
                    <Nav.Link href="" className="heart-icon position-absolute end-0 mb-4"><BsHeart/></Nav.Link>
                </div>                
                <Card.Body>
                    <Card.Subtitle>{offer_attr}</Card.Subtitle>
                    <Card.Title>{offer_name}</Card.Title>                    
                </Card.Body>
                <div className="offer-price d-flex justify-content-end"><span className="px-3 py-1">save {offer_price}€</span></div>
                <div className="offer-price-banner d-flex justify-content-end my-2"><span className="px-3 py-1">save 5.00€ sdfsfsfsfsd</span></div>
            </Card>
        </div>
    );
}

export function LoayltyCard({loy_name, loy_image}) {
    return (
        <div className="LoayltyCard">
            <Card className="mx-auto shadow" style={{ width: '18rem' }}>
                <Card.Body className="d-flex flex-row align-items-center">
                    <Image src={loy_image}/>
                    <Card.Title className="mx-3">{loy_name}</Card.Title>
                </Card.Body>               
            </Card>
        </div>
    );
}

export function RecipeCard() {
    return (
        <div className="RecipeCard">
            <Card className="mx-auto shadow" style={{ width: '20rem' }}>
                <Card.Body className="position-relative">
                    <Card.Title>Shrimp Noodles</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">John Doe</Card.Subtitle>       
                    <div className="recipe-image position-absolute end-0 bottom-0">
                        <Image src="https://www.gin-kingdom.com/media/catalog/product/cache/3/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/s/i/six-ravens-gin.jpg"/>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export function CategoryCard({cate_name, cate_image, actived, setActived, key, data}) {
    // const [selected, setSelected] = useState('inactived');
    return(
        <div className="CategoryCard">
            <Card data={data} className="mx-auto" id={actived == data ? 'actived' : 'inactived'} style={{width: '10rem'}} onClick={() => {                
                   console.log(actived, data);
                   setActived(data);
            }}>
                <Card.Body className="card-body">
                    <Card.Img className="rounded-4 shadow" src={cate_image}/>
                    <Card.Subtitle className="text-center mt-2">{cate_name}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

 