import styled, { css } from 'styled-components';

interface ContainerProps {
  focus: boolean;
  filled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 90%;
  display: flex;
  align-items: flex;
  border: 2px solid #232129;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.focus &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.filled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: white;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
