import styled from 'styled-components';

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ gridLength }) => `repeat(${gridLength}, 1.5fr)` };
    gap: 25px;
    padding: 1rem;

    overflow: scroll;

    &::-webkit-scrollbar {
        height: 6px;
        width: 4px;
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: gray;
        border-radius: 5px;
    }

    &::-webkit-scrollbar:vertical {
        display: none;
    }
    @media (max-width: 1200px) {
        width: 100%;

    }
    @media (max-width: 768px) {
        width: 100%;
    }

`;

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 200px;
    padding: 1rem 1.7rem;
    background: var(--gradient-black);
    border-radius: 15px;
    @media (max-width: 1200px) {
        width: 100%;

    }
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        gap: 1.5rem;
    }

`;

export const CardImg = styled.img`
    width: 80px;
    height: 130px;
    border-radius: 16px;
    object-fit: cover;
    img {
        width: 100px;
        height: 100px;
    }
    @media (max-width: 768px) {
        width: 40%;
        height: 70%;
        margin-left: 1.4rem;

    }

`;

export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100px;
    margin-right: 1.8rem;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const CardTitle = styled.h3`
    margin: 0;
    font-size: 15px;
    margin-bottom: 5px;
    font-weight: 500;
    letter-spacing: 0.2rem;
    color: white;
    @media (max-width:1200px) {
        gap: 10px;
        padding-right: 6px;
        margin-bottom: 8px;

    }
    @media(max-width: 844px) {
        font-size: 16px;
        margin-bottom: 15px;
    }
`;


export const CardPrice = styled.span`
    font-weight: 600;
    font-size: 1.2rem;
    background: var(--gradient-beige);
    color: black;
    text-align: center;
    border-radius: 1rem;
    @media (max-width: 768px) {
        font-size: 90%;
    }
`;