import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

const Language = () => (
    <Container>
        <Row className="justify-content-md-center">
            <Col xs lg="3">
            <li>Python</li>
            </Col>
            <Col xs lg="3">
            <li>Javascript</li>
            </Col>
            <Col xs lg="3">
            <li>C</li>
            </Col>
        </Row>

        <Row className="justify-content-md-center">
            <Col xs lg="3">
            <li>PostgreSQL</li>
            </Col>
            <Col xs lg="3">
            <li>SQLite3</li>
            </Col>
            <Col xs lg="3">
            <li>MySQL</li>
            </Col>
        </Row>

        <Row className="justify-content-md-center">
            <Col xs lg="3">
            <li>HTML</li>
            </Col>
            <Col xs lg="3">
            <li>SASS/CSS</li>
            </Col>
            <Col xs lg="3">
            
            </Col>
        </Row>
    </Container>
)
export default Language;