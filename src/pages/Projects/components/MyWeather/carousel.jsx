import React from 'react';
import styled from 'styled-components';
import {Carousel} from "react-bootstrap";
import Homepage from '../../../../assets/img/MW/weather.jpg';
import Search from '../../../../assets/img/MW/weather-sydney.jpg';


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
                src={Homepage}
                alt="Homepage"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Search}
                alt="Search Result"
                />
            </Carousel.Item>

        </Carousel>
    </CrslStyle>
    </Container>
)
export default HomeCarousel;