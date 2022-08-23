import styled from "styled-components";

export const Content = styled.div`
  height: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;

  & > h1 {
    margin-bottom: 3rem;
  }

  & > ul {
    list-style-type: none;
    font-size: 2rem;
  }
`;
