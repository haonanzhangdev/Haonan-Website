import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Layout = styled.div`
    font-size: 20px;
    display: flex;
    flex-wrap: wrap;
    
`;

const ItemStyle = styled(Link)`
    padding-left: 20px;
    padding-right: 20px;
    color: #414453;
    &:hover {
        color: #b35c0b;
        text-decoration:none;
    }
`;

const Items = () => (
    <Layout>
        <ItemStyle to='/About'>About</ItemStyle>
        <ItemStyle to='/Resume'>Resume</ItemStyle>
        <ItemStyle to='/Projects'>Projects</ItemStyle>
        <ItemStyle to='/Contact'>Contact</ItemStyle>
    </Layout>
);
export default Items;