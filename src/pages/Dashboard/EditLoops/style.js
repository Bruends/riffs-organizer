import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const Title = styled.h1`
  text-align: center;
`
export const ButtonWrapper = styled(FlexContainer)`
  margin-top: 3rem;
  justify-content: flex-end;
`
