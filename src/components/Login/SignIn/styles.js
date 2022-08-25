import styled from "styled-components";

export const Content = styled.div`
  height: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;

  & > h1 {
    margin-bottom: 3rem;
  }
`;

export const FormGroup = styled.form`
  & > label {
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    & > input {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      padding: 1rem;
      border-radius: 0.5rem;
      border: none;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
  & > button {
    border: none;
    padding: 1rem 5rem;
    border-radius: 0.5rem;
    background-color: #1aae9f;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.6rem;
  }
`;
