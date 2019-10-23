import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logoUco from '../logouco.png';
import logoTech from '../logomain.png';

function MainContent(){
    return(
        <div>
            <Container className="main-content-text">
                <Row className="justify-content-center">2da Hackaton</Row>
                <Row className="justify-content-center">UCO - Tech and Solve</Row>
                <Row>
                    <Col className="justify-content-center"><img src={logoUco} className="imagen"/></Col>
                    <Col className="justify-content-center"><img src={logoTech} className="imagen"/></Col>
                </Row>
            </Container>

        </div>
    );
}

export default MainContent;