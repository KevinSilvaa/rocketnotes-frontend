import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 0.75rem;
    padding: 1.5rem;
    margin-bottom: 1rem;

    > h1 {
      flex: 1;
      text-align: left;
      font-size: 1.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > footer {
      width: 100%;
      display: flex;
      margin-top: 1.5rem;
    }
`;
