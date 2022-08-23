import styled from "styled-components";

export const ListItem = styled.li`
  min-height: 5rem;
  padding: 1rem 0;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span button {
    background: ${({ theme }) => theme.colors.purple};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.6rem;
  }
`;
