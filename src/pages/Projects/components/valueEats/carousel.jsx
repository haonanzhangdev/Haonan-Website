import React from 'react';
import styled from 'styled-components';
import {Carousel} from "react-bootstrap";
import Homepage from '../../../../assets/img/VE/HOMEPAGE.jpg';
import Login from '../../../../assets/img/VE/Login.jpg';
import Signup from '../../../../assets/img/VE/SIGNUP.jpg';
import Foreatery from '../../../../assets/img/VE/FOREATERY.jpg';
import Profile from '../../../../assets/img/VE/PROFILE.jpg';

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
                alt="About This Site"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Login}
                alt="About Me"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Signup}
                alt="My Resume"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Foreatery}
                alt="My Projects"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Profile}
                alt="Contact Me"
                />
            </Carousel.Item>
        </Carousel>
    </CrslStyle>
    </Container>
)
export default HomeCarousel;