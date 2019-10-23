import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logoUco from '../logouco.png';
import logoTech from '../logomain.png';

function MainContent(){
    return(
            <Container className="main-content-text justify-content-center">
                <Row>2da Hackaton</Row>
                <Row>UCO - Tech and Solve</Row>
                <Row>
                    <Col><img src={logoUco} className="imagen"/></Col>
                    <Col><img src={logoTech} className="imagen"/></Col>
                </Row>
            </Container>

    );
}

export default MainContent;