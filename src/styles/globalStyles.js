import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
        overflow: hidden;
    }

    html,
    body {
    padding: 0;
    margin: 0;
    font-family: Gotham, helvetica, arial, sans-serif;
    color: ${({ theme }) => theme.colors.ice};
    }

    body {
    background: ${({ theme }) => theme.colors.siphon};
    margin: 0 auto;
    }

`;

export default GlobalStyle;

export const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10rem auto;
`;

export const Container = styled.div`
  padding: 2rem 5rem;
`;

export const InputText = styled.input`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
`;
