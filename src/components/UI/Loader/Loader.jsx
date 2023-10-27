import React from 'react'
import { LoaderContainer, LoaderStyled } from './LoaderStyled'
import { useTime, useTransform } from 'framer-motion';

const Loader = ({ styles }) => {
    const time = useTime();
    const rotate = useTransform(time, [0, 1200], [0, 360], { clamp: false });

    
  return (
    <LoaderContainer>
        <LoaderStyled args={styles} style={{ rotate }} />
    </LoaderContainer>
  );
};

export default Loader;