import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MultiItemCarousel from "../multi_item_carousel";


export function Loyalty() {
  return (
    <section className="Loyalty">
        <Container>
            <MultiItemCarousel type="Loyalty"/>
        </Container>
    </section>
  );
}
