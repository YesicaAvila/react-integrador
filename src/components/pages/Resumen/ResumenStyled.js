import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ResumenContainerStyled = styled.div`
    padding: 6rem 5rem;
    background-image: url('https://res.cloudinary.com/dqhrvfasu/image/upload/v1698102729/books_i73fvl.jpg');
    background-position: center;
    background-size: cover;
`;

export const ResumenTitleStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        padding: 10px;
        color: rgba(0, 0, 0, 0.5);
        border-radius: 1rem;
        background-color: orange;
        margin-bottom: 20px;
    }
    @media (max-width: 590px) {
        width: 100%;
    }
    @media (max-width: 502px) {
        margin-top: 12px;
    }
`;

export const StyledLink = styled(Link)`
    padding: 0.8rem 1.5rem;
    outline: none;
    border: none;
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
    background: white;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;

    & span {
        font-weight: 800;
        font-size: 1rem;
        background: red;
        color: black;
    }
`;

export const ProductContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
`;

export const HrStyled = styled.hr`
    margin: 4rem 0;
`;

export const ContainerInfoStyled = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: white;
    padding: 15px;
    border-radius: 1rem;
    margin-top: 15px;
    margin-bottom: 20px;
    background-color: black;
    border: solid orange;
    h3 {
        font-size: 25px;
    }
    span {
        font-size: 20px;
    }
    @media (max-width: 678px) {
        width: 100%;
    }
    @media (max-width: 380px) {
        width: 100%;

    }
`;

export const ResumenCostoStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        font-size: 20px;
    }
    @media (max-width: 380px) {
        flex-direction: column;
        p {
            text-align: center;
        }
    }
`;

export const EnvioStyled = styled(ResumenCostoStyled)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PrecioTotalStyled = styled(ResumenCostoStyled)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
`;