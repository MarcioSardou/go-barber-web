import React from 'react';
import { FiArrowDownLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => (
  <>
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="logo GoBarber" />

        <form>
          <h1>Faça seu cadastro</h1>
          <Input placeholder="nome" name="nome" icon={FiUser} />
          <Input placeholder="email" name="email" icon={FiMail} />
          <Input
            type="password"
            name="password"
            placeholder="senha"
            icon={FiLock}
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="2">
          <FiArrowDownLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  </>
);
export default SignUp;
