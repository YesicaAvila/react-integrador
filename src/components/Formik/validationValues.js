import * as Yup from 'yup';
import { regEmail } from '../utils/regExp';


export const checkoutValidationSchema = Yup.object({
    name: Yup.string().required('Campo requerido'),
    cellphone: Yup.string().required('Campo requerido'),
    location: Yup.string().required('Campo requerido'),
    address: Yup.string().required('Campo requerido'),
});

export const registerValidationSchema = Yup.object({
    name: Yup.string().required('Campo requerido'),
    email: Yup.string().matches(regEmail, 'Email no válido').required('Campo Requerido'),
    password: Yup.string().min(6, 'Minimo de 6 caracteres').required('Campo Requerido'),
});

export const loginValidationSchema = Yup.object({
    email: Yup.string().matches(regEmail, 'Email no válido').required('Campo Requerido'),
    password: Yup.string().min(6, 'Minimo de 6 caracteres').required('Campo Requerido'),
});

export const contactValidationSchema = Yup.object({
    name: Yup.string().required('Campo Requerido'),
    email: Yup.string().matches(regEmail, 'Email no válido').required('Campo Requerido'),
    mensaje: Yup.string().min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(100, 'El mensaje no debe tener más de 100 caracteres')
    .required('El mensaje es requerido'),
});