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
    }
`;

export const Form = styled.form`
    max-width: 550px;
    margin: 2.25rem auto;

    > header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2.25rem;

        h1 {
            font-size: 2.25rem;
            font-weight: 500;
        }

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 1.25rem;
        }
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;
