/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import * as Yup from 'yup';

import { Container, Content, Background, AnimationContainer } from './styles';
import logoImg from '../../assets/logo.svg';

import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';

import Button from '../../components/Button/index';
import Input from '../../components/Input/index';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast, removeToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        signIn({
          email: data.email,
          password: data.password,
        });
        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
        addToast({
          type: 'error',
          title: 'Login incorreto',
          description: 'Digite um e-mail válido',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="logo GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
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
          </Form>
          <Link to="SignUp">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};
export default SignIn;
