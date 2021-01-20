/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { FiArrowDownLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import * as Yup from 'yup';

import { useToast } from '../../hooks/ToastContext';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background, AnimationContainer } from './styles';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast, removeToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'Digite 6 dígitos'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/users', data);

      history.push('/');

      addToast({
        type: 'success',
        title: 'cadastro realizado!',
        description: 'Você já pode fazer seu logon no GoBarber!',
      });
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
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="logo GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input placeholder="nome" name="name" icon={FiUser} />
            <Input placeholder="email" name="email" icon={FiMail} />
            <Input
              type="password"
              name="password"
              placeholder="senha"
              icon={FiLock}
            />
            <Button>Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowDownLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignUp;
