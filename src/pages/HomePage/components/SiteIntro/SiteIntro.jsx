import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughWink } from '@fortawesome/free-solid-svg-icons'

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

const Header = styled.div`
    padding: 3.75em 3em 1.25em;
`;

const Title = styled.div`
    margin: 0 0 2em;
    padding: 0;
    text-align: center;
`;

const Heading = styled.h2`
    font-weight: 900;
    font-size: 2em;
    text-transform: uppercase;
    margin-bottom: 1em;
`;

const Paragh = styled.p`
    /* margin-bottom: 0; */
    /* font-family: "Raleway",Helvetica,sans-serif; */
    font-size: .7em;
    font-weight: 400;
    letter-spacing: .25em;
    line-height: 2.5;
    /* margin-top: -1em; */
    text-transform: uppercase;
`;

const smile = <FontAwesomeIcon icon= {faLaughWink} size = 'lg' color = '#f8bf56'/>

const SiteIntro = () => (
    <Container>
        <Header>
        <Title>
            <Heading>Welcome</Heading>
            <Paragh>Hi, Welcome to my website! 
                A well designed React Application Written by Javascript.
                Please feel free to check the source code in GitHub Repo 
                and give me some suggestion.{smile}</Paragh>
        </Title>
        </Header>
    </Container>
)
export default SiteIntro;