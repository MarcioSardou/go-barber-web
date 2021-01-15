/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiArrowDownLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

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
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
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

        <a href="2">
          <FiArrowDownLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};
export default SignUp;
