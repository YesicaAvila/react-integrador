import styled from 'styled-components'

export const MisOrdenesContainerStyled = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1500px;
    @media (max-width: 372px) {
        width: 100%;
    }
`;

export const PedidosContainerStyled = styled.div`
    background: black;
    width: 380px;
    border-radius: 15px;
    padding: 1rem 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
    gap: 10px;
    @media (max-width: 372px) {
        width: 100%;
    }
    @media (max-width: 348px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const TextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleStyled = styled.h2`
    margin: 0;
    font-size: 1.2rem;
`;

export const IdStyled = styled.p`
    font-size: 1rem;
    color: white;
`;

export const PreciosStyled = styled.p`
    font-weight: 700;
    font-size: 1.5rem;
    color: orange;
    text-align: center;
    border-radius: 1rem;
`;