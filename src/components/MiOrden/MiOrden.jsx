import React, { useEffect } from 'react'
import { OrdenesBtnContainerStyld, OrdenesContainerStyled, OrdenesTitleStyled } from './MiOrdenStyled'
import Button from '../UI/Button/Button'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getOrders } from '../../axios/axios-orders'
import { clearError, fetchOrdersFail } from '../orders/ordersSlice'
import CardsMisOrdenes from '../Mis Ordenes/CardsMisOrdenes'

const MiOrden = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.user.currentUser)
    const {orders, error} = useSelector(state => state.orders);

    useEffect(() => {
        if(!orders) {
            getOrders(dispatch, currentUser)
        }

        if (!currentUser?.token) {
            dispatch(fetchOrdersFail())
        } else {
            error && dispatch(clearError())
        }
    }, [currentUser, orders, error, dispatch])

  return (
    <OrdenesContainerStyled>
        <OrdenesTitleStyled>Mis Ordenes</OrdenesTitleStyled>
        <CardsMisOrdenes />
        <OrdenesBtnContainerStyld>
            <Button onClick={() => navigate('/')}>Volver a comprar</Button>
        </OrdenesBtnContainerStyld>
    </OrdenesContainerStyled>
  );
};

export default MiOrden;