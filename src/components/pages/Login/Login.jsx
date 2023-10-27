import React from 'react';
import { BodyContainer, Form, LoginContainerStyled, LoginEmailStyled } from './LoginStyles';
import { Formik } from 'formik';
import LoginInput from '../../UI/LoginInput/LoginInput';
import { Link } from 'react-router-dom';
import Submit from '../../UI/Submit/Submit';
import { loginInitialValues } from '../../Formik/initialVaues';
import { loginValidationSchema } from '../../Formik/validationValues';
import { useDispatch } from 'react-redux';
import useRedirect from '../../Hooks/useRedirect';
import { loginUser } from '../../../axios/axios-user';
import { setCurrentUser } from '../../redux/user/userSlice';



const Login = () => {

    const dispatch = useDispatch();

    useRedirect("/")

  return (
    <BodyContainer>
            <LoginContainerStyled>
                <h1>Iniciar Sesión</h1>
                <Formik
                    initialValues={loginInitialValues}
                    validationSchema={loginValidationSchema}
                    onSubmit={async (values) => {
                        const user = await loginUser(values.email, values.password);

                        if(user) {
                            dispatch(setCurrentUser({
                                ...user.usuario,
                                token: user.token
                            }))
                        }

                    }}
                >
                    <Form>
                        <LoginInput name="email" type='text' placeholder='Email' />
                        <LoginInput name="password" type='password' placeholder='Password' />
                        <Link to='/forgot-password'>
                        </Link>
                        <Link to='/register'>
                            <LoginEmailStyled>¿No tenes cuenta? Crea una cuenta</LoginEmailStyled>
                        </Link>
                        <Submit>
                            Ingresar
                        </Submit>
                    </Form>
                </Formik>
            </LoginContainerStyled>
    </BodyContainer>
    
  );
};

export default Login;