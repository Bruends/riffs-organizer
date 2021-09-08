import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #5C33F6;    
    --main-color: #16C79A;    
    --main-font: 'Roboto', 'Helvetica';
    // dashboard  
    --dash-menubg: #161616;   
    --dash-bg: #e7e4d8; 
    --dash-bg: #121013; 

    // alerts
    --success-color: #57CC99;
    --error-color: #FF4848;
    --info-color: #39A2DB;

    //card
    --card-bg: #222;
  }

  *{
    box-sizing: border-box;
  }

  body {    
    padding: 0;
    margin: 0;
    font-family: var(--main-font);   
    color: #fff; 
    background-color: var(--dash-bg);
  }
`

export default GlobalStyle
