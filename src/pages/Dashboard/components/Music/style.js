import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 1rem auto;
  display: flex;
  border-radius: 6px;
  min-height: 6rem;
  background-color: var(--card-bg);
  min-width: 90%;
  margin: 1.5rem auto;
  border: 1px solid var(--main-color);
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  /* &::after {
    content: '';
    display: block;
    width: 2rem;
    height: 0.1rem;
    background-color: #fff;
    margin: 0 auto;
    position: relative;
    top: 0.3rem;
    border-radius: 10px;
  } */
`

export const MusicLink = styled.div`
  a {
    display: block;
    padding: 0.5rem;
    color: #fff;
    background-color: var(--main-color);
    text-decoration: none;
    max-width: 8rem;
    border-radius: 1rem;

    &:hover {
    }
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: flex-end;

  a {
    display: block;
    padding: 0.6rem 0.6rem;
    background-color: var(--main-color);
    font-size: 0.8rem;
    color: #fff;
    box-shadow: none;
    border: none;
    border-radius: 6px;
    margin: 0.2rem;
    text-decoration: none;

    &:hover {
      filter: brightness(125%);
      cursor: pointer;
    }
  }
`
