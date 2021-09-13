import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Courses from './Courses';
import Button from '../../components/Button';
import Resume from '../../assets/doc/Resume.pdf';

const Container = styled.div`
    padding: 3em 3em 1em;
    background: #fff;
    margin: 0 0 3em;
    position: relative;
`;

const Header = styled.div`
    display: flex;
    border-bottom: 1px solid hsla(0,0%,62.7%,.3);
    margin: 0 0 3em;
    position: relative;
`;

const Title = styled.div`
    padding: 1em 1em 2em;
    font-family: 'Glory', sans-serif;
    letter-spacing: .25em;
    line-height: 1.65;
    text-transform: uppercase;
    
`;

const H2 = styled.h2`
    font-weight: 900;
    font-size: 1.5em;
    display: inline-block;
    
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

const DL = styled.a`
    display: inline-block;
    padding-left: 3.5em;
    font-weight: 500;
    font-size: 1.2em;
`;


const resume = () => (
    <>
    <Navbar />
    <Container>
        <Header>
            <Title>
                <H2>Resume</H2>
                <DL href={Resume} download><Button variant='download' size='small'>Download</Button></DL>
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