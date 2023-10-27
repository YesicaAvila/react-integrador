import styled from 'styled-components'

export const ProductStyled = styled.div`
    display: flex;
    justify-content: space-between;
    background: black;
    background-color: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(13px);
    border: solid orange;
    border-radius: 15px;
    padding: 2rem 1.5rem;
    width: 50%;
    max-width: 620px;
    @media (max-width: 1124px) {
        width: 50%;
        flex-wrap: wrap;
    }
    @media (max-width: 986px) {
        width: 60%;

    }
    @media (max-width: 590px) {
        width: 100%;
    }
    @media (max-width: 327px) {
        width: 100%;
        padding: 10px;
    }
`;

export const LeftStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    img {
        width: 100px;
        height: 150px;
        padding: 10px;
    }
    h3 {
        text-align: center;
        
    }

    @media (max-width: 1124px) {
        width: 70%;
    }
    @media (max-width: 998px) {
        width: 70%;
        gap: 7px;
        img {
            width: 100%;
        }
    }
    @media (max-width: 422px) {
        width: 100%;
    }
    @media (max-width: 486px) {
        img {
            display: none;
        }
        h3 {
            text-align: center;
        }
    }
`;

export const PriceStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ProductPriceStyled = styled.span`
    font-weight: 800;
    font-size: 1.8rem;
    color: orange;
    gap: 20px;
    @media (max-width: 336px) {
        font-weight: 600;
    }
    @media (max-width: 327px) {
    }
`;