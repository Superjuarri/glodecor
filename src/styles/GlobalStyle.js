import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  :root {
    /* Dimentions */
    --width: min(var(--max-width), 85%);
    --min-width: 700px;
    --max-width: 1140px;
    --section-padding: 5vh 5%;

    /* Colors */
    --light-biege: #FFFAF2;
    --biege: #F8F0E5;
    --blue: #383593;
    --dark-blue: #1F0A4F;
    --light-pink: #ff3baf;
    --pink: #EC008C;
    --red: #D91B5C;
    --yellow: #FCE472;

    --black: #3C3C3C;
    --gray: #4B4B4B;
    --white: #F6F6F6;

    /* Box Shadows */
    --shadow: -8px 8px 16px rgba(0, 0, 0, 0.25);
   
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: clamp(16px, 16px, 3vw);
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
`
