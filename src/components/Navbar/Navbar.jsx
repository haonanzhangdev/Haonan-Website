import React from 'react';
import styled from 'styled-components';
import Logo from './components/Logo';
import Item from './components/NavbarItems';

const Container = styled.div`
  border-bottom: 1px solid #dadada;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 50px;
  margin-right: 50px;
`;

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 15px;
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