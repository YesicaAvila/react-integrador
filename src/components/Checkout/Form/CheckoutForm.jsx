import React from 'react'
import { CheckoutDatosStyled, CheckoutTitleStyled, Form, Formik } from './CheckoutFormStyled'
import { checkoutInitialValues } from '../../Formik/initialVaues'
import { checkoutValidationSchema } from '../../Formik/validationValues'
import Input from '../../Input/Input'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../../axios/axios-orders'
import { clearCart } from '../../redux/cart/cartSlice'
import Submit from '../../UI/Submit/Submit'
import Loader from '../../UI/Loader/Loader'

const CheckoutForm = ({cartItems, precio, shippingCost}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {currentUser} = useSelector(state => state.user)

  return (
    <CheckoutDatosStyled>
        <CheckoutTitleStyled>Completá Tus Datos</CheckoutTitleStyled>
        <Formik
            initialValues={checkoutInitialValues}
            validationSchema={checkoutValidationSchema}
            onSubmit={async (values) => {
                const orderData = {
                    items: cartItems,
                    precio,
                    shippingCost,
                    total: precio + shippingCost,
                    shippingDetails: {
                    ...values
                    }
                };

                try {
                    await createOrder(orderData, dispatch, currentUser);
                    navigate("/compra-realizada");
                    dispatch(clearCart());
                } catch (error) {
                    console.log(error);
                    alert("error al crear la orden")
                }
            }}
        >
            {
                ({isSubmitting}) => (
                    <Form>
                <Input
                    htmlFor='nombre'
                    type='text'
                    id='nombre'
                    placeholder='Nombre'
                    name="name"
                >
                    Nombre
                </Input>
                <Input
                    htmlFor='celular'
                    type='text'
                    id='celular'
                    placeholder='Celular'
                    name="cellphone"
                >
                    Celular
                </Input>
                <Input
                    htmlFor='localidad'
                    type='text'
                    id='localidad'
                    placeholder='Localidad'
                    name="location"
                >
                    Localidad
                </Input>
                <Input
                    htmlFor='dirección'
                    type='text'
                    id='dirección'
                    placeholder='Dirección'
                    name="address"
                >
                    Dirección
                </Input>
                <div>
                    <Submit disabled={!cartItems.length}>
                        {isSubmitting ? <Loader /> : "Realiza tu pedido"}
                    </Submit>
                </div>
            </Form>
                )
            }
        </Formik>
    </CheckoutDatosStyled>
  )
}

export default CheckoutForm;