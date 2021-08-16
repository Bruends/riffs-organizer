import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #fff;
  max-width: 50rem;
  display: flex;
  margin: 10vh auto;
  box-shadow: 5px 5px 0px 0px #e6e6e6;

  div {
    flex: 1;
  }
`

export const LoginLeftBg = styled.div`
  margin: 0;
  padding: 0;
  background-image: url('/imgs/loginBg.jpg');
  background-size: cover;
`

export const FormContainer = styled.div`
  padding: 4rem;

  h1 {
    margin-bottom: 2rem;
    position: relative;
    text-align: center;
  }

  h1::after {
    content: '';
    color: blue;
    display: block;
    width: 3rem;
    height: 0.3rem;
    background-color: var(--main-color);
    margin: 0 auto;
    position: relative;
    top: 0.3rem;
    border-radius: 10px;
  }
`

export const ButtonLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--main-color);
  }
`

export const ErrorSpan = styled.span`
  color: red;
  text-align: left;
`
