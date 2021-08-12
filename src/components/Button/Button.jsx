import styled, { css } from 'styled-components';

const Button = styled.button`
    border: 1.5px hidden black;
    background-color: white;
    color: #414453;;

    margin-bottom: .2em;
    text-transform: none;
    letter-spacing: .16em;
    font-size: 1em;
    font-weight: 600;
    
    :hover {
        border: 1.5px solid black;
        border-radius: 8px;
        background-color: #464545;
        color: white;
    }
    :focus{
        border: 1.5px solid black;
        border-radius: 8px;
        background-color: white;
        color: #464545;
        outline: none;
    }

    ${(props) => props.width && css`width: ${props.width};`}

    ${(props) => {
    const style = {
        small: css`
        padding: 8px 18px;
        font-size: 14px;
        `,
        medium: css`
        padding: 12px 18px;
        font-size: 1em;
        `,
        large: css`
        padding: 16px 18px;
        font-size: 18px;
        `,
        // medium是default
    }[props.size || 'medium'];

    return style;
    }}

    ${(props) => {
    const style = {
        primary: css`
        background: #e0446d;
        color: white;
        `,
        secondary: css`
        background: #f5f8fd;
        color: #008fb4;
        `,
        success: css`
        background: #7db343;
        color: white;
        :hover {
        background-color: #04AA6D;
        color: white;
        }
        `,
    }[props.variant];

    return style;
    }}
    `;

export default Button;
