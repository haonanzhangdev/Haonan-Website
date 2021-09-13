import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const LogoStyle = styled(Link)`
    font-size: 25px;
    font-weight: 540;
    font-family: 'Dancing Script', cursive;
    color: #e4aa48;
    &:hover {
        color: #e6e6e7;
        text-decoration:none;
}
`;

const Logo = () => (
    <LogoStyle to='/'>
        Haonan Zhang
    </LogoStyle>
);

export default Logo;