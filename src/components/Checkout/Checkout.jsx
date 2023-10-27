import React from 'react'
import { ContainerCheckoutStyled, HrCheckoutStyled } from './CheckoutStyles';
import ProductCheckout from './ProductCheckout.jsx/ProductCheckout'
import { useSelector } from 'react-redux'

import CheckoutForm from './Form/CheckoutForm';


const Checkout = () => {


    const {cartItems, shippingCost} = useSelector(state => state.cart)

    const precio =  cartItems.reduce((acc, item) => {
        return (acc += item.precio * item.quantity)
    }, 0)


  return (
    <div>
        <ContainerCheckoutStyled>
            <CheckoutForm
                cartItems={cartItems}
                shippingCost={shippingCost}
                precio={precio}
            />
            <HrCheckoutStyled />
            <ProductCheckout
                cartItems={cartItems}
                shippingCost={shippingCost}
                precio={precio}
            />
        </ContainerCheckoutStyled>
    </div>
  );
};

export default Checkout;