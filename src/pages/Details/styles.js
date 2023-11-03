import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 6.5rem auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 4rem 0;
    }
`;

export const Links = styled.ul`
    list-style-type: none;

    > li {
        margin-top: 0.75rem;

        > a {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    > button:first-child{
        align-self: flex-end;
    }

    > h1 {
        font-size: 2.25rem;
        font-weight: 500;
        padding-top: 4rem;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.WHITE}; 
        text-align: justify;
        margin-top: 1rem;
    }
`;
