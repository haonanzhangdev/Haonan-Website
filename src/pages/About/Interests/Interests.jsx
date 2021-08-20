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

const Points = styled.ul`
    list-style: disc;
    margin: 0 0 2em;
    padding-left: 1em;
`;

const List = styled.li`
    margin: 0;
    padding: 0;
    font-size: .9em;
    letter-spacing: .1em;
    font-weight: 550;
    color: #4b4b4b;
`;

const Interests = () => (
    <Intr>
        <IntTit>My Interests</IntTit>
        <IntBody>
            <Headh4>
                <p>Following are Some things I like to do to fill my time with: </p>
            </Headh4>
            <Points>
                <List>Photography</List>
                <List>Hiking</List>
                <List>Video Games</List>
                <List>Reading</List>
                <List>Cooking (Chinese Cuisine, Baking)</List>
                <List>Music (Pop, Rock, Jazz)</List>
                <List>Travel (Lockdown drives me crazy in this point.)</List>
                <List>Podcast (ABC News, Syntax - Tasty Web Development Treats, Ted Radio Hour, After Hours, 99% Invisible, Round Table China)</List>
                <List>In the future, I'd like to learn more about Writing, Piano and Dancing. </List>
            </Points>
        </IntBody>
    </Intr>
)
export default Interests;