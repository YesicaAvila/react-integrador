import styled, {css} from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.div)`
    position: fixed;
    top: 63px;
    right: 0;
    z-index: 98;
    gap: 30px;
    height: 300px;
    width: 100%;
    padding: 2rem;
    border-radius: 0 0 0 1rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(to right, #232526, #414345);
    border: solid 2px #E7E9BB;
`;

export const CloseButtonContainerStyled = styled.div`
    height: 32px;
`;

export const CloseButtonStyled = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    outline: none;
    border: none;
    border-radius: 10px;
    background: var(--btn-gradient);
    color: white;
    cursor: pointer;
`;
export const ModalMenuOverlayStyled = styled(motion.div)`
    position: fixed;
    top: 100px;
    left: 0;
    z-index: 50;
    width: 100vw;
    height: 100vh;

    ${({ isHidden }) =>
        !isHidden &&
    css`
        backdrop-filter: blur(4px);
    `}
`;


export const MenuLinksStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 50px;
    color: white;
    .links {
        text-align: center;
        transition: all .6s ease;
    }
` 
