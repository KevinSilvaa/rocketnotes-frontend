import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 9.5rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    resize: none;
    margin-bottom: 0.5rem;
    border-radius: 0.75rem;
    padding: 1rem;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;
