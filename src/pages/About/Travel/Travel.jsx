import React from 'react';
import styled from 'styled-components';

const Tra = styled.div`
    padding: 1em 1em 2em;
    font-family: "Raleway",Helvetica,sans-serif;
    letter-spacing: .25em;
    line-height: 1.65;
`;

const TraTit = styled.h3`
    text-align: center;
    margin-bottom: 2em;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 900;
`;

const TraBody = styled.div`
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
    <Tra>
        <TraTit>My Travel</TraTit>
        <TraBody>
            <Headh4>
                I have been to some beautiful places in my extra time. 
                Honestly, I starts loving travel after I graduate from high school. 
                This is because, in china, students do not have too much relax time
                until they enter college. 
            </Headh4>
            <Points>
                <List> </List>
                <List> </List>
                <List> </List>
                <List> </List>
                <List> </List>
                <List> </List>
                <List> </List>
                <List> </List>
                <List> </List>
            </Points>
        </TraBody>
    </Tra>
)
export default Interests;