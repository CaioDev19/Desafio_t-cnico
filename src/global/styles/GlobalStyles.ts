import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.COLORS.white};
  }
  img {
    max-width: 100%;
  }
`
