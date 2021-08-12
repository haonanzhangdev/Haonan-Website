import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import Pythonlist from './Python/Python';
import WebDev from './WebDev/WebDev';
import Language from './Language/Language';

const Sk = styled.div`
    padding: 1em 1em 2em;
    font-family: "Raleway",Helvetica,sans-serif;
    letter-spacing: .25em;
    line-height: 1.65;
    text-align: center;
`;

const SkillsTit = styled.h3`
    text-align: center;
    margin-bottom: 2em;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 900;
`;

const SkillsBody = styled.div`
    margin-bottom: 1.5em;
`;

const But = styled.h4`
    margin-bottom: .2em;
    text-transform: none;
    letter-spacing: .16em;
    font-size: 1em;
`;

const SkList = styled.div`
    margin: 2em 3em 3em;
    display:flex;
    text-decoration:none;
`;

const UL = styled.ul`
    column-count: 3;
    column-gap: 10em;
    text-align: center;
`;

const Litem = styled.li`
    padding-right:5em;
    font-size: .9em;
`;

const Linksch = styled.a`
    transition: color .2s ease,border-bottom-color .2s ease;
    border-bottom: 1px dotted hsla(0,0%,62.7%,.65);
    color: inherit;
    text-decoration: none;
`;

const Skills = () => (
    <Sk>
        <SkillsTit>Skills</SkillsTit>
        <SkillsBody>
            <But>
                <Button>Python</Button>
            </But>
            <SkList>
                <Pythonlist />
            </SkList>

            <But>
                <Button>Web Development</Button>
            </But>
            <SkList>
                <WebDev />
            </SkList>

            <But>
                <Button>Languages</Button>
            </But>
            <SkList>
                <Language />
            </SkList>
        </SkillsBody>
    </Sk>
)
export default Skills;