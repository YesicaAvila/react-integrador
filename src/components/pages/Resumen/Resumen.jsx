import React, { useEffect, useState } from 'react';
import { ContainerInfoStyled, EnvioStyled, PrecioTotalStyled, ProductContainerStyled, ResumenContainerStyled, ResumenCostoStyled, ResumenTitleStyled } from './ResumenStyled'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../axios/axios-orders';
import { useParams } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import CardResumen from '../../pages/Resumen/CardResumen';
import Link from '../../UI/Link/Link';



const Resumen = () => {

    const dispatch = useDispatch()
    const {orderId} = useParams();
    
    const [visitedOrder, setVisitedOrder] = useState(null);

    const orders = useSelector(state => state.orders.orders)
    const {currentUser} = useSelector(state => state.user)
    
    useEffect(() => {
        if(!orders) {
            getOrders(dispatch, currentUser)
        }
        setVisitedOrder(orders?.find(order => order._id === orderId))
    }, [orderId, currentUser, orders, dispatch])

  return (
    <ResumenContainerStyled>
        <ResumenTitleStyled>
            <h1>Resumen Orden: #{visitedOrder?._id.slice(0,7)}</h1>
        </ResumenTitleStyled>
        <ProductContainerStyled>
            {
                visitedOrder?.items.map((item) => {
                    return <CardResumen 
                    {...item} 
                    key={item._id}
                    />
                })
            }
        </ProductContainerStyled>
        <hr></hr>
        <ContainerInfoStyled>
            <h3>Costos:</h3>
            <ResumenCostoStyled>
                <p>Costo de producto:</p>
                <span>{formatPrice(visitedOrder?.precio)}</span>
            </ResumenCostoStyled>
            <EnvioStyled>
                <p>Costo de envio:</p>
                <span>{formatPrice(visitedOrder?.shippingCost)}</span>
            </EnvioStyled>
            <PrecioTotalStyled>
                <p>Total:</p>
                <span>{formatPrice(visitedOrder?.total)}</span>
            </PrecioTotalStyled>
        </ContainerInfoStyled>
        <Link borderRadius='20' to='/mi-orden'></Link>
    </ResumenContainerStyled>
  )
}

export default Resumen;