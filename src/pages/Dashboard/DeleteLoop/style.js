import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`

export const Title = styled.h1`
  text-align: center;
`
export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: flex-end;
  align-items: center;
`

export const DeleteLoopsWrapper = styled(ButtonWrapper)`
  justify-content: center;
`

export const TimeSpan = styled.span`
  display: block;
  margin: 1rem 0 -1rem 0;
  font-weight: bold;
`

export const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
