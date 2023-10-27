import styled from 'styled-components';

export const CardContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 80%;
    & img {
        width: 80px;
        height: 80px;
        border-radius: 16px;
        object-fit: cover;
    }
    @media (max-width: 428px) {
        width: 100%;
    }
    @media (max-width: 372px) {
        width: 100%;
        gap: 15px;
    }
`;

export const CardInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 50%;
    @media (max-width: 372px) {
        width: 100%;
    }
`;

export const ProductTitleStyled = styled.h3`
    margin: 0;
    margin-bottom: 2px;
    font-weight: 500;
    @media (max-width: 372px) {
        width: 100%;
    }
`;

export const TextStyled = styled.h3`
    margin: 0;
    color: #666;
    font-size: 1rem;
    
`;

export const PriceStyled = styled.span`
    font-weight: 600;
    font-size: 24px;
    @media (max-width: 372px) {
        font-size: 20px;

    }
`;

export const QuantityContainerStyled = styled.span`
    display: flex;
    align-items: center;
`;