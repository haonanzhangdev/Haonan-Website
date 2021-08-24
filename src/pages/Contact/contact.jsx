import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { AiOutlineSmile } from "react-icons/ai";
import ContactIcon from '../../components/ContactIcon';


const Container = styled.div`
    padding: 3em 3em 1em;
    background: #fff;
    border: 1px solid hsla(0,0%,62.7%,.3);
    margin: 0 0 3em;
    position: relative;
    font-family: "Raleway",Helvetica,sans-serif;
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
    /* font-family: "Raleway",Helvetica,sans-serif; */
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

const Emailat = styled.div`
    margin: 3em 1em;
`;

const Emailline = styled.div`
    width: 100%;
`;

const Emaillink = styled.a`
    transition: color .2s ease,border-bottom-color .2s ease;
    border-bottom: 1px dotted hsla(0,0%,62.7%,.65);
    color: inherit;
    text-decoration: none;
    :hover{
        color: #0056b3;
        text-decoration: none;
    }
`;

const Icons = styled.div`
    margin-left: -2em;
`;



const Contact = () => (
    <>
    <Navbar />
    <Container>
        <Header>
            <Title>
                <H2>Contact</H2>
                <IntroContainer>
                <Intro>Feel free to contact me <AiOutlineSmile /></Intro>
                </IntroContainer>
            </Title>
        </Header>
        <Emailat>
            {/* <form action="https://formspree.io/f/xbjqppdw" method="post">
                <label for="email">Your Email</label>
                <input name="Email" id="email" type="email" />
                <button type="submit">Submit</button>
            </form> */}
            <p>Hey, please feel free to email me at:</p>
            <Emailline>
                <Emaillink>
                    conanzahn@gmail.com
                </Emaillink>
            </Emailline>
        </Emailat>
        <Icons><ContactIcon /></Icons>
    </Container>
    <Footer />
    </>
)

export default Contact;