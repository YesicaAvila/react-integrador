import React from 'react'
import { LeftStyled, ProductPriceStyled, ProductStyled } from './CardResumenStyled'
import { PriceContainerStyled } from '../../Checkout/ProductCheckout.jsx/ProductCheckoutStyled'
import { formatPrice } from '../../utils/formatPrice'

const CardResumen = ({img, name, quantity, precio}) => {
  return (
    <ProductStyled>
        <LeftStyled>
        <img 
          src={img}
          alt={name}
        />
        <div>
          <h3>{name}</h3>
        </div>
        </LeftStyled>
        <PriceContainerStyled>
          <p>{quantity}U</p>
          <ProductPriceStyled>{formatPrice(precio * quantity)}</ProductPriceStyled>
        </PriceContainerStyled>
    </ProductStyled>
  )
};

export default CardResumen;