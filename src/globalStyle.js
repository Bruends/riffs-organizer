import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #5C3D2E;
    --main-font: 'Roboto', 'Helvetica';
    // dashboard  
    --dash-menubg: #2D2424;   
    --dash-bg: #e7e4d8; 
  }

  *{
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: var(--main-font);    
    background-color: var(--dash-bg);
    
  }
`

export default GlobalStyle
