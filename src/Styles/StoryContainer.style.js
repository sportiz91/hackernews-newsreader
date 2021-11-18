import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #fafafe;
        color: #202020;
        font-family: Arial,Helvetica,sans-serif;
    }
`;

export const StoryMain = styled.main`
  max-width: 1137px;
  margin: 2.4rem auto;
`;

export const AppTitle = styled.h1`
  margin-bottom: 2rem;
  text-decoration: underline;
`;
