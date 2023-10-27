import styled from 'styled-components';

export const TextStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    height: calc(100vh - 100px);
    background-image: url('https://res.cloudinary.com/dqhrvfasu/image/upload/v1697903942/dracula_dqalym.jpg');
    /* background-position: center; */
    background-size: cover;
`;

export const TitleStyled = styled.h1`
    margin-top: 50px;
    color: white;
`;

export const ContainerInfoStyled = styled.div`
    text-align: center;
    padding: 15px;

    & p {
        font-size: 25px;
        color: white;
        margin-bottom: 50px;
        padding: 20px;
        
    }
`;

export const BookIconStyle = styled.div`
    font-size: 2.8rem;
    padding: 15px;
`;

