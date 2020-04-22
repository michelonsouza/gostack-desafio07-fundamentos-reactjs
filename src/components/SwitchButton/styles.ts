import styled, { css } from 'styled-components';

interface ButtonProps {
  active: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: transparent;
  border: 0;
  position: absolute;
  width: 40px;
  top: 10px;
  right: 10px;

  .dash {
    display: block;
    width: 100%;
    height: 6px;
    background: #ff872c;
    border-radius: 3px;
    position: absolute;
    top: 7px;
  }

  .circle {
    position: relative;
    display: block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #fff;
    z-index: 10;
    transition: all 200ms ease;

    ${props =>
      props.active &&
      css`
        margin-left: calc(100% - 20px);
      `}
  }
`;
