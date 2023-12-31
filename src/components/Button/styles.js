import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    height: 3.5rem;
    border: 0;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 0.75rem;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
