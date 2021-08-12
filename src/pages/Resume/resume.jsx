import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Courses from './Courses';

const Container = styled.div`
    padding: 3em 3em 1em;
    background: #fff;
    border: 1px solid hsla(0,0%,62.7%,.3);
    margin: 0 0 3em;
    position: relative;
`;

const Header = styled.div`
    display: flex;
    border-bottom: 1px solid hsla(0,0%,62.7%,.3);
    margin: 0 0 3em;
    /* padding-bottom: 3em; */
    position: relative;
    width: calc(100% + 6em);
`;

const Title = styled.div`
    padding: 1em 1em 2em;
    font-family: "Raleway",Helvetica,sans-serif;
    letter-spacing: .25em;
    line-height: 1.65;
    text-transform: uppercase;
    
`;

const H2 = styled.h2`
    font-weight: 900;
    font-size: 1.5em;
    
`;

const IntroContainer = styled.div`
    margin-bottom: 0;
    display: flex;
`;

const Intro = styled.div`
    padding-top: 1em;
    padding-bottom: 1.5em;
    padding-right: 1em;
    padding-left: .2em;
    margin: 0;
    font-size: .8em;
    font-weight: 600;
`;



const resume = () => (
    <>
    <Navbar />
    <Container>
        <Header>
            <Title>
                <H2>Resume</H2>
                <IntroContainer>
                <Intro>Eduaction</Intro>
                <Intro>Experience</Intro>
                <Intro>Skills</Intro>
                <Intro>Courses</Intro>
                </IntroContainer>
            </Title>
        </Header>
        <Education />
        <Experience />
        <Skills />
        <Courses />
    </Container>
    <Footer />
    </>
)
export default resume;