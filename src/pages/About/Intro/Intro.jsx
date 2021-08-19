import React from 'react';
import styled from 'styled-components';

const Intr = styled.div`
    padding: 1em 1em 2em;
    font-family: "Raleway",Helvetica,sans-serif;
    letter-spacing: .25em;
    line-height: 1.65;
`;

const IntTit = styled.h3`
    text-align: center;
    margin-bottom: 2em;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 900;
`;

const IntBody = styled.div`
    margin-bottom: 1.8em;
`;

const Headh4 = styled.h4`
    margin-bottom: .2em;
    text-transform: none;
    letter-spacing: .16em;
    font-size: 1em;
    font-weight: 600;
`;

const Introduction = () => (
    <Intr>
        <IntTit>Introduction</IntTit>
        <IntBody>
            <Headh4>
                Hi, I'm Haonan Zhang. I am a student and want to be a 
                front-end developer. I was born in Anhui, China, currently 
                studying and living in Sydney, Australia. I am a big fan of 
                photography, playing games and building things.
            </Headh4>
        </IntBody>
    </Intr>
)
export default Introduction;