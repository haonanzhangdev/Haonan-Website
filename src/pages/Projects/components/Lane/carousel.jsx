import React from 'react';
import styled from 'styled-components';
import {Carousel} from "react-bootstrap";
import Velocity from '../../../../assets/img/Lane/Velocity.jpg';
import Lane_process from '../../../../assets/img/Lane/Lane_process.jpg';
import Lane from '../../../../assets/img/Lane/Lane.jpg';

const Container = styled.div`
    margin-top: 3em;
    margin-left: 50px;
    margin-right: 50px;
    padding: 0 3em 1em;
    background: #fff;
    border-top: 1px solid hsla(0,0%,62.7%,.3);
    border-bottom: 1px solid hsla(0,0%,62.7%,.3);
    border-radius: 8px;
    position: relative;
`;

const CrslStyle = styled.div`
    /* border-bottom: 1px solid #dadada; */
    margin-top:1em;
    text-align: center;
    margin-left: 180px;
    margin-right: 180px;
`;

const HomeCarousel = () =>(
    <Container>
    <CrslStyle>
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Velocity}
                alt="Velocity Detect"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Lane_process}
                alt="Lane Detect Process"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Lane}
                alt="Lane Detect"
                />
            </Carousel.Item>
        </Carousel>
    </CrslStyle>
    </Container>
)
export default HomeCarousel;