import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signUpImg from '../../assets/sign-up.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
  max-width: 700px;
  align-self: center;
`;

const appearFromRight = keyframes`
  from {
    opacity:0;
    transform: translate(50px);
  }
  to {
    opacity:1;
    transform: translate(0);
  }
`;

export const AnimationContainer = styled.div`
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  display: flex;

  animation: ${appearFromRight} 1s;

  form {
    margin: 60px 0 50px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpImg}) no-repeat center;
  background-size: cover;
`;
