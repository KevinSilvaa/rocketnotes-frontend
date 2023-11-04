import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;
    height: 6.5rem;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    display: flex;
    justify-content: space-between;
    padding: 1rem 2.5rem;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 50%;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        line-height: 1.5rem;

        span {
            font-size: 0.875rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 1.175rem;
            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: transparent;
    
    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 2.25rem;
        transition: color 0.2s ease-in-out;

        &:hover {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;
