import React from 'react'
import { IdStyled, PedidosContainerStyled, PreciosStyled, TextContainerStyled, TitleStyled } from './MisOrdenesStyled'
import OrderStatus from '../OrderStatus/OrderStatus'
import { formatPrice } from '../utils'
import Button from '../../components/UI/Button/Button'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../utils/formatDate'

const MisOrdenes = ({createdAt, status, total, _id}) => {

  const navigate = useNavigate();

  return (
    <PedidosContainerStyled>
        <TextContainerStyled>
            <TitleStyled>Código del Pedido: {_id.slice(0, 7)}</TitleStyled>
            <IdStyled>Fecha {formatDate(createdAt)}hs</IdStyled>
            <PreciosStyled>{formatPrice(total)}</PreciosStyled>
        </TextContainerStyled>
        <OrderStatus status={status} />
        <Button  onClick={() => navigate(`/resumen/${_id}`)}>Ver Resumen</Button>
        <Button onClick={()=> navigate(`/`)}>Volver</Button>
    </PedidosContainerStyled>
  );
};

export default MisOrdenes;