import React from 'react';
import { BodyRegisterContainer, Form, LoginContainerStyled, LoginEmailStyled } from './RegisterStyles';
import { Formik } from 'formik';
import LoginInput from '../../UI/LoginInput/LoginInput';
import Submit from '../../UI/Submit/Submit';
import {  registerInitialValues } from'../../Formik/initialVaues';
import { registerValidationSchema } from '../../Formik/validationValues';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../../axios/axios-user';

const Register = () => {

  const navigate = useNavigate()

  return (
    <BodyRegisterContainer>
      <LoginContainerStyled>
        <h1>Crea una cuenta</h1>
        <Formik
          initialValues={registerInitialValues}
          validationSchema={registerValidationSchema}
          onSubmit={ async (values, actions) => {
            const user = await createUser(values.name, values.email, values.password);
            actions.resetForm();
            if (user) {
              navigate("/login")
            }
          }}
            
        >
          <Form>
            <LoginInput name="name" type='text' placeholder='Nombre' />
            <LoginInput name="email" type='text' placeholder='Email' />
            <LoginInput name="password" type='password' placeholder='Password' />
            <LoginEmailStyled to='/login'>
              <p>¿Estás registrado? Iniciá sesión</p>
            </LoginEmailStyled>
            <Submit >
              Registrate
            </Submit>
          </Form>
        </Formik>
      </LoginContainerStyled>
    </BodyRegisterContainer>
  );
}

export default Register;