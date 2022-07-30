import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f2f2f2;
    transition: 3ms;
  }

  button, input, a, svg {
    cursor: pointer;
    text-decoration: none;
  }
`;
