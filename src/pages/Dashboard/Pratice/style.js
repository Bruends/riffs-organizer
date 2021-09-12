import styled from 'styled-components'

export const ContentWrapper = styled.div`
  padding: 2rem 1rem;
  margin: 1rem auto;
  max-width: 95%;

  background-color: var(--dash-menubg);
  text-align: center;
  min-height: 35rem;
  border-radius: 1rem;
`

export const LoopsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 4px solid var(--main-color);
  border-radius: 10px;
  align-items: center;
  margin: 1rem auto;
  justify-content: center;
  max-width: 32rem;
  * {
    margin: 0.2rem;
  }
`
