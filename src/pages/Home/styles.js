import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 16rem auto;
    grid-template-rows: 6.5rem 8rem auto 4rem;
    grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Brand = styled.div`
    grid-area: brand;
    display: grid;
    place-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`

export const Menu = styled.ul`
    grid-area: menu;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 4rem;
    text-align: center;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`

export const Search  = styled.div`
    grid-area: search;
    padding: 4rem 4rem 0;
`

export const Content = styled.div`
    grid-area: content;
    padding: 4rem 4rem 0;
    overflow-y: auto;
`

export const NewNote = styled.button`
    grid-area: newnote;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.25rem;
    background: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: none;
`
