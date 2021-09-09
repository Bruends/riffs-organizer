import styled from 'styled-components'

export const ContentWrapper = styled.div`
  padding: 2rem 1rem;
  margin: 0 auto;
  max-width: 35rem;
  /* background-color: var(--card-bg); */
  text-align: center;
  min-height: 100vh;
`

export const LoopsContainer = styled.div`
  display: flex;
  border: 4px solid var(--main-color);
  border-radius: 10px;
  align-items: center;
  margin-top: 0.8rem;
  justify-content: center;

  * {
    margin: 0.2rem;
  }
`
