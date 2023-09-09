import React from 'react';
import { CloseButtonContainerStyled, CloseButtonStyled, ContainerStyled, MenuLinksStyles } from './ModalMenuStyles'
import { AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuHamburguerHidden } from '../redux/MenuHamburguesa/menuSlice';
import { ModalMenuOverlayStyled } from '../ModalMenu/ModalMenuStyles';
import { Link } from 'react-router-dom';



const ModalMenu = () => {

    const hiddenHamburguer = useSelector(state => state.menu.hiddenHamburguer);

    const dispatch = useDispatch();

  return (
    <>
        {!hiddenHamburguer && (
            <ModalMenuOverlayStyled
                onClick={() => dispatch(toggleMenuHamburguerHidden())}
                isHidden={hiddenHamburguer}
            />
        )}
        <AnimatePresence>
            {!hiddenHamburguer && (
                <ContainerStyled
                    initial={{ translateX: 600 }}
                    animate={{ translateX: 0 }}
                    exit={{ translateX: 600 }}
                    transition={{ duration: 0.5 }}
                    key='cart-menu'
                >
                    <CloseButtonContainerStyled>
                        <CloseButtonStyled
                            className='close__menu'
                            whileTap={{ scale: 0.95 }}
                            onClick={() => dispatch(toggleMenuHamburguerHidden())}
                        >
                            <AiOutlineClose size='24px' />
                        </CloseButtonStyled>
                    </CloseButtonContainerStyled>
                    <MenuLinksStyles onClick={() => dispatch(toggleMenuHamburguerHidden())}>
                        <Link to='/'>Home</Link>
                        <Link to='/login'>Inicie Sesion</Link>
                        <Link to='/register'>Registrate</Link>
                        <Link to='/checkout'>Tus Productos</Link>
                    </MenuLinksStyles>
                </ContainerStyled>
            )}
        </AnimatePresence>
    </>
  )
};

export default ModalMenu;