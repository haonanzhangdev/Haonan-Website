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

const resume = () => (
    <>
    <Navbar />
    <Container>
        <Header>
            Resume
        </Header>
    </Container>
    <Footer />
    </>
)
export default resume;