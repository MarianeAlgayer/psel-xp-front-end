import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #000000;

    --yellow-600: #FBC004;
    --green-600: #00B050;
    --blue-600: #5386F4;
    --red-600: #E52E4D;

    --gray-900: #121212;
    --gray-800: #1E1F1F;
    --gray-700: #3D3D3E;
    --gray-300:#D4D4D8;
    --gray-100: #F1F1F1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--gray-900);
  }

  body, input, button {
    color: var(--black);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`;
