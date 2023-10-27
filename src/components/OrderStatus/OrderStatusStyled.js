import styled from 'styled-components'

export const StatusStyled = styled.span`
    text-align: center;
    position: absolute;
    width: 2.4rem;
    height: 1.8rem;
    top: 1rem;
    right: 1rem;
    border-radius: 1rem;
    padding: 0.3rem;
`;

export const CheckStyled = styled(StatusStyled)`
    background: black;
`;

export const PendingStyled = styled(StatusStyled)`
    background: gray;
`;

export const CancelStyled = styled(StatusStyled)`
    background: red;
`;