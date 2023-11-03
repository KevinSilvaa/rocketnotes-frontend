import styled from "styled-components";

export const Container = styled.span`
    background: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    margin: 1rem 0.5rem 0 0;
`;
