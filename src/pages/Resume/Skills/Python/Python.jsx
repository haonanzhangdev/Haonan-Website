import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

const Pythonlist = () => (
    <Container>
        <Row className="justify-content-md-center">
            <Col xs lg="3">
            <li>Python</li>
            </Col>
            <Col xs lg="3">
            <li>Pandas</li>
            </Col>
            <Col xs lg="3">
            <li>Scikit-Learn</li>
            </Col>
        </Row>

        <Row className="justify-content-md-center">
            <Col xs lg="3">
            <li>Jupyter</li>
            </Col>
            <Col xs lg="3">
            <li>Tensorflow + Keras</li>
            </Col>
            <Col xs lg="3">
            <li>Numpy</li>
            </Col>
        </Row>

        <Row className="justify-content-md-center">
            <Col xs lg="3">
            <li>OpenCV</li>
            </Col>
            <Col xs lg="3">
            <li>Matplotlib</li>
            </Col>
            <Col xs lg="3">
            <li>SciPy</li>
            </Col>
        </Row>
    </Container>
)
export default Pythonlist;