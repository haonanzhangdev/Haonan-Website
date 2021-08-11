import React from 'react';
import styled from 'styled-components';
import profile from '../../assets/img/profile.jpg';
import HomeCarousel from './components/carousel/HomeCarousel';
import SiteIntro from './components/SiteIntro'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Intro = styled.div`
    border-bottom: 1px solid #dadada;
    margin-top:3em;
    text-align: center;
    margin-left: 50px;
    margin-right: 50px;
`;

const Logo = styled.div`
    margin-top: 20px;
    margin-bottom: 1em;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
`;

const LogoImg = styled.img`
    width: 10em;
    border-radius: 50%;
    /* display: block; */
`;

const Header = styled.div`
    font-size: 2em;
    font-weight: 900;
    margin-bottom: 30px;
`;

const Title = styled.h3`
    text-transform: uppercase;
    letter-spacing: .25em;
    line-height: 1.65;
`

const Email = styled.a`
    text-decoration: none;
    color: #414453;
    border-bottom: 1px dotted hsla(0,0%,62.7%,.65);
    line-height: 2;
    font-size: 60%;
    transition: color .2s ease,border-bottom-color .2s ease;
    &:hover{
        color: #494997;
    }
`;

const Homepage = () => (
    <>
    <Navbar />
    <SiteIntro />
    <HomeCarousel />
        <Intro>
            <Logo>
                <LogoImg src={profile} alt='Avatar' />
            </Logo>
            <Header>
                <Title>Haonan Zhang</Title>
                <Email href='mailto:conanzahn@gmail.com'>
                    conanzahn@gmail.com
                </Email>
            </Header>
        </Intro>
    <Footer />
    </>
)
export default Homepage;