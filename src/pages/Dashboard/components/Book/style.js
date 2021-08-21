import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20rem;
  min-width: 16rem;
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #e2e2e2;
  margin: 1rem;
`

export const Cover = styled.img`
  display: block;
  width: 100%;
  height: 15rem;
  border-radius: 0.5rem 0.5rem 0 0;
`

export const ShortDescription = styled.span`
  line-height: 1.3rem;
  padding: 0.8rem;
  text-align: center;
  margin-bottom: 1rem;
`
export const Title = styled.h1`
  font-size: 1.3rem;
  margin-top: 2rem;
  color: var(--main-color);

  &::after {
    content: '';
    color: blue;
    display: block;
    width: 2rem;
    height: 1px;
    background-color: var(--main-color);
    margin: 0.2rem auto;
    position: relative;
    top: 0.3rem;
    border-radius: 10px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: right;
  padding: 2rem;

  a {
    display: block;
    padding: 0.8rem 1rem;
    background-color: var(--main-color);
    color: #fff;
    box-shadow: none;
    border: none;
    border-radius: 5px;
    margin: 0.2rem;

    &:hover {
      filter: brightness(110%);
      cursor: pointer;
    }
  }
`
