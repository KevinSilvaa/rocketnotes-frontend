import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 9rem;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;
        padding: 0 8rem;

        svg {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 1.5rem;
        }
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: 2rem auto;

    > div:nth-child(3) {
        margin-bottom: 1.5rem;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -7.5rem auto 2rem;
    width: 186px;
    height: 186px;
    
    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;
        background: ${({ theme }) => theme.COLORS.ORANGE};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 5px;
        right: 5px;
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }
    }
`;
