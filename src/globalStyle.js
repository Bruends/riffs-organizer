import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #334756;
    --main-font: 'Roboto', 'Helvetica';
    // dashboard  
    --dash-menubg: #161616;   
    --dash-bg: #e7e4d8; 

    // alerts
    --success-color: #57CC99;
    --error-color: #FF4848;
    --info-color: #39A2DB;
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
