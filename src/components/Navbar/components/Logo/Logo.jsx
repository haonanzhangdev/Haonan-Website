import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const LogoStyle = styled(Link)`
    font-size: 20px;
    font-weight: 540;
    color: #414453;
    &:hover {
        color: #414453;
        text-decoration:none;
}
`;

const Logo = () => (
    <LogoStyle to='/'>
        Haonan Zhang
    </LogoStyle>
);

export default Logo;