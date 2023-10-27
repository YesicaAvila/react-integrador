import React from 'react'
import { BookIconStyle, ContainerInfoStyled, TextStyled, TitleStyled } from './CompraRealizadaStyled'
import Button from '../UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import {GiSpellBook} from 'react-icons/gi';


const CompraRealizada = () => {
    const navigate = useNavigate();
  return (
    <div>
        <TextStyled>
            <img 
            src=''
            alt=''
            />
            <ContainerInfoStyled>
                <TitleStyled>¡Gracias!</TitleStyled>
                <BookIconStyle>
                  <GiSpellBook  />
                </BookIconStyle>
                <p>Tu compra ha sido realizado con éxito</p>
            </ContainerInfoStyled>
            <Button onClick={() => navigate('/mi-orden')}>Mi Orden</Button>
        </TextStyled>
    </div>
  )
}

export default CompraRealizada