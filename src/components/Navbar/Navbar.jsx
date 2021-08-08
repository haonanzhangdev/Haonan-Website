import React from 'react';
import styled from 'styled-components';
import Logo from './components/Logo';

const Header = styled.div`
  border-bottom: 1px solid #dadada;
`;

const Container = styled.div`
  width: 1024px;
  margin-left: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Layout = styled.div`
  display: flex;
`;

const Left = styled.div`
`;

const Right = styled.div`
  margin-left: auto;
`;

const Navbar = () => (
    <Header>
        <Container>
            <Layout>
                <Left>
                  <Logo />
                </Left>
                <Right>

                </Right>
            </Layout>
        </Container>
    </Header>
);

export default Navbar;