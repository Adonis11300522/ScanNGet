import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LoginForm } from '../../components/forms';


export function AuthPage() {
    return(
        <div className='AuthPage'>            
            <Container className="position-relative">
                <Row className='mx-auto justify-content-center'>
                    <Col lg={4} md={4} sm={12} className="form-style">
                        <div class="square" ></div>
                        <div class="square" ></div>
                        <div class="square"></div>
                        <div class="square" ></div>
                        <div class="square" ></div>
                        <div class="square"></div>
                        <LoginForm/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}