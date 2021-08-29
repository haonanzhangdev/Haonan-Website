import React from 'react';
import styled from 'styled-components';
import Logo from './components/Logo';
import Item from './components/NavbarItems';

const Container = styled.div`
  border-bottom: 1px solid #dadada;
  background-color: #222224;
`;

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 9px;
  margin-left: 50px;
  margin-right: 50px;
  padding-top: 8px;
`;

const Left = styled.div`
`;

const Right = styled.div`
  margin-left: auto;
`;

const Navbar = () => (
  <Container>
      <Layout>
          <Left>
            <Logo />
          </Left>
          <Right>
            <Item />
          </Right>
      </Layout>
  </Container>
);

export default Navbar;