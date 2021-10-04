import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {      
    --main-color: #FF4C29; 
    
    --main-font: 'Montserrat', 'Helvetica';
    // dashboard  
    --dash-menubg: #161616;        
    --dash-bg: #222; 

    // details
    --success-color: #57CC99;
    --error-color: #FF4848;
    --cancel-color: #555;
    --info-color: #39A2DB;

    // card
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

    @media (max-width: 768px) {
      padding-bottom: 4rem;
    }
  }
`

export default GlobalStyle
