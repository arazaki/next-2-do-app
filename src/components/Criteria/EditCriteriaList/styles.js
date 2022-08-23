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

  & > ul {
    margin-top: 3rem;
    list-style-type: none;
    font-size: 2rem;
  }
`;

export const ListItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    background: ${({ theme }) => theme.colors.purple};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0.2rem;
    border-radius: 0.5rem;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.6rem;
  }
`;
