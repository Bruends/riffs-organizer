import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 1rem auto;
  display: flex;
  border-radius: 6px;
  min-height: 6rem;
  background-color: #fff;
  min-width: 22rem;
  flex: 1;
  margin: 1.5rem;
`

export const ContentWrapper = styled.div`
  padding: 0.6rem 1.5rem;
  text-align: center;
  flex: 1;
`

export const SideImage = styled.div`
  background-image: url('/imgs/cover.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 6px 0 0 6px;
  min-height: 100%;
  width: 6rem;
`

export const Title = styled.h1`
  color: var(--main-color);
  text-align: center;

  &::after {
    content: '';
    display: block;
    width: 2rem;
    height: 0.1rem;
    background-color: var(--main-color);
    margin: 0 auto;
    position: relative;
    top: 0.3rem;
    border-radius: 10px;
  }
`

export const MusicLinks = styled.a`
  display: block;
  padding: 1rem;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  a {
    display: block;
    padding: 0.6rem 0.6rem;
    background-color: var(--main-color);
    font-size: 0.6rem;
    color: #fff;
    box-shadow: none;
    border: none;
    border-radius: 6px;
    margin: 0.2rem;

    &:hover {
      filter: brightness(110%);
      cursor: pointer;
    }
  }
`
