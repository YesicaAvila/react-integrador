import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toggleMenuHamburguerHidden } from '../redux/MenuHamburguesa/menuSlice';
import { BurguerStyled } from './BurguerStyles';

const BurguerButton = () => {
  const dispatch = useDispatch();

  return (
    <BurguerStyled onClick={() => dispatch(toggleMenuHamburguerHidden())}>
        <AiOutlineMenu />
    </BurguerStyled>
  )
}

export default BurguerButton;