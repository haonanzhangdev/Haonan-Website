import React from 'react';
import styled from 'styled-components';
import {Carousel} from "react-bootstrap";
import slide1 from '../../../../assets/img/slide1.png';
import slide2 from '../../../../assets/img/slide2.png';
import slide3 from '../../../../assets/img/slide3.jpg';

const CrslStyle = styled.div`
    /* border-bottom: 1px solid #dadada; */
    margin-top:3em;
    text-align: center;
    margin-left: 200px;
    margin-right: 200px;
`;

const HomeCarousel = () =>(
    <CrslStyle>
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide1}
                alt="About Me"
                />
                <Carousel.Caption>
                <h5>About Me</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>My Resume</h5>
                <p>Lorem </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>My Projects</h5>
                <p>Praesent commodo cursus magna</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </CrslStyle>
)
export default HomeCarousel;