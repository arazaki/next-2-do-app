import styled from "styled-components";

export const Content = styled.div`
  height: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;

  & > div {
    font-size: 2rem;
    & > h1 {
      margin-bottom: 3rem;
    }

    & > ul {
      list-style-type: none;
    }

    & > p {
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const ListItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
