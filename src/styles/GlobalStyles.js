import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    body {
        font-family: 'Montserrat', 'Roboto', sans-serif;
        background-color: #181f36;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
  }
`
