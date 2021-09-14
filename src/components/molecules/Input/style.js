import styled from 'styled-components'

export const LabelStyle = styled.label`
  display: block;
  margin-top: 1.6rem;
`

export const InputStyle = styled.input`
  display: block;
  padding: 9px;
  box-shadow: none;
  outline: none;
  border: none;
  width: 100%;
  ${({ small }) => (small ? 'width: 6rem;' : null)}
  background: transparent;
  margin: 0.2rem auto;
  border: 2px solid transparent;
  font-size: 1.05rem;
  border-bottom: 2px solid var(--main-color);
  color: #fff;

  :focus {
    border-bottom: 2px solid var(--main-color);
  }
`

export const ErrorSpan = styled.span`
  display: block;
  color: var(--error-color);
  margin: 0.4rem 0;
`
