import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
    font-size: 20px;
    display: flex;
    flex-wrap: wrap;
`;

const ItemStyle = styled.div`
    padding-left: 20px;
    padding-right: 20px;
`;

const Items = () => (
    <Layout>
        <ItemStyle>About</ItemStyle>
        <ItemStyle>Resume</ItemStyle>
        <ItemStyle>Projects</ItemStyle>
        <ItemStyle>Contact</ItemStyle>
        
    </Layout>
);

export default Items;