import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  min-width: 30vw;
  background-color: #111;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
`

export const Background = styled.section`
  outline: 2px solid var(--main-color);
  outline-offset: -2rem;
  display: flex;
  flex-direction: column;
  width: 95vw;
  height: 95vh;
  margin: 1.5rem auto;
  justify-content: center;
  align-items: center;
  background-color: #000;
  background-image: url('./imgs/landingbg.jpg');
  background-size: cover;
  background-position: center;
`
export const Title = styled.h1`
  font-size: 2rem;

  &::after {
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
export const Text = styled.p`
  text-align: center;
  font-weight: bold;
`

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  a {
    background-color: var(--main-color);
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      filter: brightness(150%);
    }
  }
`
