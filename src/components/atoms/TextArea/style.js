import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  display: block;
  padding: 10px;
  box-shadow: none;
  outline: none;
  border: none;
  width: 100%;
  margin: 1rem auto;
  background: #f8f9fa;
  border: 1px solid #e2e2e2;
  font-size: 1.05rem;
  border-radius: 6px;

  :focus {
    border: 2px solid var(--main-color);
  }
`;
