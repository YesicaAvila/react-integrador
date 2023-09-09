import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { HrStyled, LinkStyled, ModalContainerStyled, UsernameStyled } from './ModalUserStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, toggleMenuHidden } from '../../components/redux/user/userSlice';




const ModalUser = () => {
  const {currentUser, hiddenMenu} = useSelector(state => state.user)

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const modal = document.getElementById('modal-user');
      if (modal && !modal.contains(e.target)) {
        setIsModalOpen(false);
      dispatch(toggleMenuHidden());
    }
  };

  if (!hiddenMenu) {
    document.addEventListener('mousedown', handleClickOutside);
  } else {
    document.removeEventListener('mousedown', handleClickOutside);
  }
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [dispatch, hiddenMenu, isModalOpen]);

  
  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key='cart-user'
          id='modal-user'
          
        >
            <UsernameStyled>{currentUser?.name}</UsernameStyled>
            <HrStyled />
            <LinkStyled to='/checkout' onClick={() => {
              dispatch(toggleMenuHidden())
            }}>Mis ordenes</LinkStyled>
            <span onClick={() => {
              dispatch(setCurrentUser(null))
              dispatch(toggleMenuHidden())
            }}>Cerrar Sesion</span>
        </ModalContainerStyled>
      ) }
    </AnimatePresence>
  );
};

export default ModalUser;