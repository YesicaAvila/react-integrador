import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
    width: 50%;
    @media (max-width: 700px) {
        width: 100%;
    }
    @media (max-width: 428px) {
        width: 100%;
    }
    
`;

export const ProductosTitleStyled = styled.h1`
    font-weight: 600;
    font-size: 25px;
    color: white;
    padding: 2rem;
    text-align: center;
`;

export const CardsWrappersStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    color: white;
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 20px;
`;

export const PriceContainerStyled = styled.div`
    margin: 0 auto;
    margin-top: 1rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    p {
        border-radius: 2rem;
        width: 30%;
        text-align: center;
        font-size: 25px;
    }
    @media (max-width: 332px) {
        width: 100%;
        
    }
`;

export const SubtotalStyled = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    gap: 2.5rem;
    color: white;
    font-weight: 500;
    p {
        background: none;
    }
    span {
        padding: 7px;
        font-size: 30px;
    }
    @media (max-width: 412px) {
        width: 100%;
    }
    @media (max-width: 416px) {
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.5rem;
    }
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)`
    @media (max-width: 337px) {
        gap: 10px;
    }
    @media (max-width: 380px) {
        gap: 10px;

    }

`;

export const PriceTotalStyled = styled.span`
    color: #ff7a00;
    font-weight: 800;
    font-size: 1.5rem;
`;

export const HrStyled = styled.hr`
    margin: 1rem 0;
    width: 100%;
`;