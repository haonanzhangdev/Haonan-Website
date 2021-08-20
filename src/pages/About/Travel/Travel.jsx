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

const Travel = () => (
    <Tra>
        <TraTit>My Travel</TraTit>
        <TraBody>
            <Headh4>
                <p>I have been to some beautiful places in my extra time. 
                Honestly, I start loving travel after I graduate from high school. 
                This is because, in the country that I was born, students do not have too much relax time
                until they enter college. </p>
                <p>Many cities in China are really charming and attractive, although some places I cannot 
                remember since it's too long ago.</p>
                <p>I haven't been to many countries that were my pity! While I hope I can have 
                opportunities to visit different countries to widen my horizon in the future.</p>
            </Headh4>
            <Points>
                <List>I have been to Shanghai many times with my parents when I was a kid</List>
                <List>During 2014-2018, I lived in Guang Dong to complete my bachelor degree</List>
                <List>In 2014, I visited: Hefei, Nanjing, Guangzhou</List>
                <List>In 2015, I visited: Hefei, Shantou, Jieyang </List>
                <List>In 2016, I visited: Nanjing, Shantou, Xiamen, Beijing </List>
                <List>In 2017, I visited: Suzhou, Ningbo, Guangzhou, Shanghai </List>
                <List>In 2018, I live in Nanjing. I visited: Kuala Lumpur(Malaysia), Hongkong, Guangzhou</List>
                <List>2019 - Now, I came to Sydney(Australia) study information technology master degree</List>
                <List>In 2019, I visited Canbera(NSW), Gold Cost(Brisbane), Wollongong(NSW)</List>
                <List>In 2020, I visited Hobart and Launceston in Tasmania</List>
                <List>Stay safe at home during Lockdown period</List>
            </Points>
        </TraBody>
    </Tra>
)
export default Travel;