import styled from 'styled-components'


export const OrdenesContainerStyled = styled.div`
    max-width: 1600px;
    background-image: url('https://res.cloudinary.com/dqhrvfasu/image/upload/v1698103031/compras_fu7v5p.jpg');
    background-position: right;
    background-size: cover;
    width: 100%;
    min-height: calc(100vh - 500px);
    margin: 0 auto;
    padding: 2rem 0;
    @media (max-width: 372px) {
        width: 100%;
    }
    
`;

export const OrdenesTitleStyled = styled.h2`
    font-weight: 700;
    font-size: 2.5rem;
    text-align: center;
    margin-top: 60px;
    color: orange;
`;

export const OrdenesBtnContainerStyld = styled.div`
    padding-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;