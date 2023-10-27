import React from 'react'
import { MisOrdenesContainerStyled } from './MisOrdenesStyled'
import { useSelector } from 'react-redux'
import MisOrdenes from './MisOrdenes';
import Loader from '../UI/Loader/Loader';

const CardsMisOrdenes = () => {

  const {orders, loading, error} = useSelector(state => state.orders);

  if (loading && !orders) {
    return <Loader styles={{ height: '50px', width: '50px'}} />
  };

  if (error) {
    return <h2 style={{ textAlign: 'center'}} > {error} </h2>
  }


  return (
    <MisOrdenesContainerStyled>
      {
        orders?.length ? (
          orders.map((order) => {
            return <MisOrdenes {...order} key={order._id} />
          })
        ) : (
          <h2>No hay pedidos en tus ordenes</h2>
        )
      }
    </MisOrdenesContainerStyled>
  );
};

export default CardsMisOrdenes;