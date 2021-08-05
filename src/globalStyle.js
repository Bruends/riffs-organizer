import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #ffaa44;
    --main-font: 'Helvetica';
  }

  *{
    box-sizing: border-box;
  }

  body {
    font-family: var(--main-font);
  }
`

export default GlobalStyle
