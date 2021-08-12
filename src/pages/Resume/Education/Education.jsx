import React from 'react';
import styled from 'styled-components';

const Edu = styled.div`
    padding: 1em 1em 2em;
    font-family: "Raleway",Helvetica,sans-serif;
    letter-spacing: .25em;
    line-height: 1.65;
`;

const EduTit = styled.h3`
    text-align: center;
    margin-bottom: 2em;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 900;
`;

const EduBody = styled.div`
    margin-bottom: 1.5em;
`;

const Degree = styled.h4`
    margin-bottom: .2em;
    text-transform: none;
    letter-spacing: .16em;
    font-size: 1em;
`;

const School = styled.div`
    font-size: .9em;
`;

const Linksch = styled.a`
    transition: color .2s ease,border-bottom-color .2s ease;
    border-bottom: 1px dotted hsla(0,0%,62.7%,.65);
    color: inherit;
    text-decoration: none;
`;

const Education = () => (
    <Edu>
        <EduTit>Education</EduTit>
        <EduBody>
            <Degree>
                Master of Information Technology
            </Degree>
            <School>
                <Linksch href = 'https://www.unsw.edu.au/'>University of New South Wales
                </Linksch>, 2019 - 2021, Sydney, Australia
            </School>
        </EduBody>
        <EduBody>
            <Degree>
                Bachelor of Biology Science
            </Degree>
            <School>
                <Linksch href = 'https://www.hstc.edu.cn/'>Hanshan Normal University
                </Linksch>, 2014 - 2018, China
            </School>
        </EduBody>
    </Edu>
)
export default Education;