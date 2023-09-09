import React from 'react';
import Alert from '@mui/material/Alert';

const Alerts = () => {

  return (
    <div style={{ paddingTop: '10px', 
      position: "fixed", 
      bottom: '0', 
      left: '0', 
      right: '0', 
      zIndex: '1000', 
      padding: '10px' }}>
      <Alert 
        variant="filled" 
        severity="success"
      >
        Producto agregado con éxito al carrito!
      </Alert>
    </div>
  )
};

export default Alerts;