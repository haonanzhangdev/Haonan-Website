import styled, { css } from 'styled-components';

const NakedButton = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;

  ${(props) => {
    const style = {
      link: css`
        color: #008fb4;
      `,
    }[props.variant];

    return style;
  }}
`;

export default NakedButton;