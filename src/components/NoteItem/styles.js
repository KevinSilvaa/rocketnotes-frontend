import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    margin-bottom: 0.5rem;
    border-radius: 0.75rem;
    padding-right: 1rem;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }
    
    .button-add {
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > input {
        width: 100%;
        height: 3.5rem;
        padding: 0.75rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;
