import React from 'react'
import { CancelStyled, CheckStyled, PendingStyled } from './OrderStatusStyled'
import { FiCheckCircle } from 'react-icons/fi'
import { FiSlash } from 'react-icons/fi'
import { SiTimescale } from 'react-icons/si'


const OrderStatus = ({ status }) => {
  return (
    <div>
        {status === 'check' && (
            <CheckStyled>
                <FiCheckCircle />
            </CheckStyled>
        )}
        {status === 'pending' && (
            <PendingStyled>
                <SiTimescale />
            </PendingStyled>
        )}
        {status === 'cancel' && (
            <CancelStyled>
                <FiSlash />
            </CancelStyled>
        )}
    </div>
  );
};

export default OrderStatus;