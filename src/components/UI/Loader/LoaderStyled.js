import  styled, { css } from 'styled-components'
import { motion } from 'framer-motion';

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(151px - 3rem);
    margin: 0 auto;

    @media (max-width: 1200px) {
        width: calc(100% - 100%);
    }
`;

export const LoaderStyled = styled(motion.div)`
    border: 2px dashed #d9d9d9;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border-left-color: transparent;

    @media (max-width: 1200px) {
        width: 20px;
    }

    

    ${({ args }) => css({ ...args })}
`; 