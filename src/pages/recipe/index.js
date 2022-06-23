import React from "react";
import { Container, Row } from "react-bootstrap";
import { RecipeCard } from "../../components/cards";
import Layout from "../../components/layout";
function RecipePage() {
   
  return (
    <>
        <Layout>
            <div className="banner-bg"></div>
            <Container>
                <div className="banner-title">Beverages</div>
                <Row>
                    <RecipeCard/>
                </Row>
            </Container>
        </Layout>
    </>
  );
}

export default RecipePage;
