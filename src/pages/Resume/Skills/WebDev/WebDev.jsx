import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

const WebDev = () => (
    <Container>
        <Row className="justify-content-md-center">
            <Col xs lg="3">
            <li>Javascript</li>
            </Col>
            <Col xs lg="3">
            <li>HTML</li>
            </Col>
            <Col xs lg="3">
            <li>CSS/SASS</li>
            </Col>
        </Row>

        <Row className="justify-content-md-center">
            <Col xs lg="3">
            <li>React</li>
            </Col>
            <Col xs lg="3">
            <li>Node.JS</li>
            </Col>
            <Col xs lg="3">
            <li>PostgreSQL</li>
            </Col>
        </Row>

        <Row className="justify-content-md-center">
            <Col xs lg="3">
            <li>SQLite3</li>
            </Col>
            <Col xs lg="3">
            <li>Axios</li>
            </Col>
            <Col xs lg="3">
            <li>Amazon Web Services</li>
            </Col>
        </Row>
    </Container>
)
export default WebDev;