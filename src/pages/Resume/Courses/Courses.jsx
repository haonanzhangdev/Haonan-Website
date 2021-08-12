import React from 'react';
import styled from 'styled-components';

const Cour = styled.div`
    padding: 1em 1em 2em;
    font-family: "Raleway",Helvetica,sans-serif;
    letter-spacing: .25em;
    line-height: 1.65;
    text-align: center;
`;

const CourTit = styled.h3`
    text-align: center;
    margin-bottom: 2em;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 900;
`;

const CourBody = styled.div`
    margin-bottom: 1.5em;
`;

const UL = styled.ul`
    text-align: center;
    list-style: disc;
    margin: 0 0 2em;
    padding-left: 1em;
`;

const Li = styled.li`
    display: inline;
    padding-left: .5em;
    padding-right: 1em;
`;

const Href = styled.a`
    transition: color .2s ease,border-bottom-color .2s ease;
    border-bottom: 1px dotted hsla(0,0%,62.7%,.65);
    color: inherit;
    text-decoration: none;
    :hover{
        color: #2e59ba!important;
        border-bottom-color: transparent;
        text-decoration:none;
    }
`;

const H4 = styled.h4`
    white-space: nowrap;
    font-size: .8em;
    font-weight: 800;
    display: inline;
`;

const P = styled.p`
    display: inline;
    font-family: "Raleway",Helvetica,sans-serif;
    font-size: .8em;
    font-weight: 400;
    letter-spacing: .25em;
    line-height: 2.5;
    margin-top: -1em;
    text-transform: uppercase;
`;

const LinkCR = styled.a`
    transition: color .2s ease,border-bottom-color .2s ease;
    border-bottom: 1px dotted hsla(0,0%,62.7%,.65);
    color: inherit;
    text-decoration: none;
`;

const Courses = () => (
    <Cour>
        <CourTit>Skills</CourTit>
        <CourBody>
            <UL>
                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/COMP9101/'>
                    <H4>COMP9101:</H4>
                    <P>Design and Analysis of Algorithms</P>
                    </Href>
                </Li>

                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/COMP9021/'>
                    <H4>COMP9021:</H4>
                    <P>Principles of Programming</P>
                    </Href>
                </Li>

                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/COMP9024/'>
                    <H4>COMP9024:</H4>
                    <P>Data Structures {'&'} Algorithms</P>
                    </Href>
                </Li>

                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/COMP9331/'>
                    <H4>COMP9331:</H4>
                    <P>Computer Networks {'&'} Applications</P>
                    </Href>
                </Li>

                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/COMP9311/'>
                    <H4>COMP9311:</H4>
                    <P>Database Systems (MySQL)</P>
                    </Href>
                </Li>

                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/COMP9414/'>
                    <H4>COMP9414:</H4>
                    <P>Artificial Intelligence </P>
                    </Href>
                </Li>

                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/COMP9417/'>
                    <H4>COMP9417:</H4>
                    <P>Machine Learning {'&'} Data Mining </P>
                    </Href>
                </Li>

                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/COMP9444/'>
                    <H4>COMP9444:</H4>
                    <P>Neural Networks {'&'} Deep Learning </P>
                    </Href>
                </Li>

                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/COMP9315/'>
                    <H4>COMP9315:</H4>
                    <P>Database Systems Implementation (PostgreSQL) </P>
                    </Href>
                </Li>

                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/COMP9318/'>
                    <H4>COMP9318:</H4>
                    <P>Data Warehousing {'&'} Data Mining</P>
                    </Href>
                </Li>

                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/COMP9517/'>
                    <H4>COMP9517:</H4>
                    <P>Computer Vision</P>
                    </Href>
                </Li>

                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/COMP9511/'>
                    <H4>COMP9511:</H4>
                    <P>Human Computer Interaction</P>
                    </Href>
                </Li>

                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/COMP9020/'>
                    <H4>COMP9020:</H4>
                    <P>Foundations of Comp. Science</P>
                    </Href>
                </Li>

                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/COMP9900/'>
                    <H4>COMP9900:</H4>
                    <P>Infomation Technology Project</P>
                    </Href>
                </Li>

                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/GSOE9011/'>
                    <H4>GSOE9011:</H4>
                    <P>Engineering PGCW Research Skills</P>
                    </Href>
                </Li>

                <Li>
                    <Href href='https://www.handbook.unsw.edu.au/postgraduate/courses/2021/GSOE9820/'>
                    <H4>GSOE9820:</H4>
                    <P>Engineering Project Management</P>
                    </Href>
                </Li>
            </UL>
        </CourBody>
    </Cour>
)
export default Courses;