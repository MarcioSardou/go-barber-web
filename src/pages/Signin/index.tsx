import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="logo GoBarber" />

      <form>
        <h1>Faça seu logon</h1>
        <Input placeholder="email" name="email" icon={FiMail} />
        <Input
          type="password"
          name="password"
          placeholder="senha"
          icon={FiLock}
        />
        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);
export default SignIn;
