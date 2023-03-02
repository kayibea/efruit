import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    scroll-behavior: smooth;
  }

  body {
    color: #333;
    font-family: 'Poppins', sans-serif;
    background-color: #f5f5f5;
  }
`;

export default GlobalStyle;
