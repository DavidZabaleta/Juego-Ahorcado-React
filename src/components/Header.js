import React from 'react';
import {Container, Nav, Col} from 'react-bootstrap';

function Header (){
    return(
        <Container fluid="true" className="header">
            
             <Nav className="justify-content-end" activeKey="/home">
                 <Nav.Item>
                    <Nav.Link href="/">Incio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin">Administrar</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/play">Jugar</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
}

export default Header;