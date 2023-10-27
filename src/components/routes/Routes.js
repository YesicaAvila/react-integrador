import React from 'react';
import { Route, Routes as ReactDomRoutes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Layout from '../Layout/Layout';
import Checkout from '../Checkout/Checkout';
import ProtectedRoute from '../ProtectedRoutes/ProtectedRoute';
import CompraRealizada from '../CompraRealizada/CompraRealizada';
import MiOrden from '../MiOrden/MiOrden';
import Resumen from '../pages/Resumen/Resumen'

const Routes = () => {
    return (
        <>
            <Layout>
                <ReactDomRoutes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/mi-orden' element={<MiOrden />} />
                    <Route path='compra-realizada' element={<CompraRealizada/>} />
                    <Route path='/resumen/:orderId' element={<Resumen />} />
                    <Route path='/checkout' 
                        element={
                        <ProtectedRoute redirectTo='/register'>
                            <Checkout />
                        </ProtectedRoute>
                        }
                    />
                    <Route path='*' element={<PageNotFound />} />
                </ReactDomRoutes>
            </Layout>
        </>
    );
}

export default Routes;