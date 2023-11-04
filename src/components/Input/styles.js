import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 0.75rem;
    margin-bottom: 1rem;

    > input {
        height: 3.5rem;
        width: 100%;
        padding: 0.75rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
        
    }
    svg {
        margin-left: 1rem;
    }
`;
