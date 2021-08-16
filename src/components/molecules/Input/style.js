import styled from 'styled-components'

export const LabelStyle = styled.label`
  display: block;
  margin-top: 0.8rem;
`

export const InputStyle = styled.input`
  display: block;
  padding: 9px;
  box-shadow: none;
  outline: none;
  border: none;
  width: 100%;
  margin: 0.2rem auto;
  background: #f8f9fa;
  border: 2px solid #e2e2e2;
  font-size: 1.05rem;
  border-radius: 6px;

  :focus {
    border: 2px solid var(--main-color);
  }
`

export const ErrorSpan = styled.span`
  display: block;
  color: red;
  margin: 0.4rem 0;
`
