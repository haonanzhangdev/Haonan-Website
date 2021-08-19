import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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



const about = () => (
    <>
    <Navbar />
    <Container>
        <Header>
            <Title>
                <H2>About</H2>
                <IntroContainer>
                <Intro>This page is adding to makes this site 
                    more interesting and relaxable.</Intro>
                </IntroContainer>
            </Title>
        </Header>
    </Container>
    <Footer />
    </>
)
export default about;