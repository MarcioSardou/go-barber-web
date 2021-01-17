import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip/index';

interface ContainerProps {
  focus: boolean;
  filled: boolean;
  isErrored: boolean;
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

  ${props =>
    props.isErrored &&
    css`
      border-color: red;
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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
