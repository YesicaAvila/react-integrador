import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';


export const CheckoutTitleStyled = styled.h2`
    font-size: 28px;
    text-align: center;
    color: white;
    margin-top: 2rem;
    @media (max-width: 1200px) {
        width: 100%;
        text-align: center;
    }
`;

export const CheckoutDatosStyled = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 10px;
    @media (max-width: 1200px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        
    }
`;

export const Formik = styled(FormikContainer)`
    display: flex;
    flex-direction: column;
    @media (max-width: 1200px) {
        width: 100%;
    }
`;

export const Form = styled(FormikForm)`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1200px) {
        width: 100%;
        flex-direction: column;
    }
`;