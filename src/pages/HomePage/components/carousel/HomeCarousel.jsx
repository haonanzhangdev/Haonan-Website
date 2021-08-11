import React from 'react';
import styled from 'styled-components';
import {Carousel} from "react-bootstrap";
import aboutme from '../../../../assets/img/about.jpg';
import site from '../../../../assets/img/site.jpg';
import resume from '../../../../assets/img/resume.jpg';
import slide3 from '../../../../assets/img/resume.jpg';

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
                src={site}
                alt="About This Site"
                />
                <Carousel.Caption>
                <h5>About This Site</h5>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={aboutme}
                alt="About Me"
                />
                
                <Carousel.Caption>
                <h5>About Me</h5>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={resume}
                alt="My Resume"
                />
                <Carousel.Caption>
                <h5>My Resume</h5>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide3}
                alt="My Projects"
                />
                <Carousel.Caption>
                <h5>My Projects</h5>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide3}
                alt="Contact Me"
                />
                <Carousel.Caption>
                <h5>Contact Me</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </CrslStyle>
    </Container>
)
export default HomeCarousel;