import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #5C3D2E;
    --main-font: 'Roboto', 'Helvetica';
    // dashboard
    --dash-menubg: #2D2424;
  }

  *{
    box-sizing: border-box;
  }

  body {
    font-family: var(--main-font);
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
