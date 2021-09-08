import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 1rem auto;
  display: flex;
  border-radius: 6px;
  min-height: 6rem;
  background-color: var(--card-bg);
  min-width: 22rem;
  flex: 1;
  margin: 1.5rem;
  border: 1px solid var(--main-color);
`

export const ContentWrapper = styled.div`
  padding: 0.6rem 1.5rem;
  text-align: center;
  flex: 1;
`

export const SideDetail = styled.div`
  border-radius: 6px 0 0 6px;
  min-height: 100%;
  width: 4rem;
  background-color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`

export const Title = styled.h1`
  color: #fff;
  text-align: center;

  &::after {
    content: '';
    display: block;
    width: 2rem;
    height: 0.1rem;
    background-color: #fff;
    margin: 0 auto;
    position: relative;
    top: 0.3rem;
    border-radius: 10px;
  }
`

export const MusicLink = styled.div`
  a {
    display: block;
    padding: 1rem;
    color: #fff;
    background-color: var(--main-color);
    text-decoration: none;
    max-width: 10rem;
    margin: 1rem auto;
    border-radius: 1rem;

    &:hover {
    }
  }
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
