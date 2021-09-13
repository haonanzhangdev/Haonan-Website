import React from 'react';
import styled from 'styled-components';
import ContactIcon from '../ContactIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    /* border-top: 1px solid hsla(0,0%,62.7%,.3); */
    margin-top: 3em;
    margin-bottom: 3em;
    margin-left:10px;
`;

const Cpright = styled.div`
    color: #aaa;
    font-family: 'Glory', sans-serif;
    font-size: .5em;
    font-weight: 400;
    letter-spacing: .25em;
    text-transform: uppercase;
    margin-left: 40px;
`;

const coffee = <FontAwesomeIcon icon={faCoffee} color='#552c2cc5'/>
const love = <FontAwesomeIcon icon={faHeart} color='red'/>

const footer = () => (
    <Container>
        <ContactIcon />
        <Cpright>
            © Copyright 2021 | Made with {love} and {coffee} by Haonan Zhang.
        </Cpright>
    </Container>
)
export default footer;