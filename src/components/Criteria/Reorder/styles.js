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
    list-style-type: none;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  & > ul li {
    min-height: 5rem;
    padding: 1rem 0;
    display: flex;
    border-bottom: 1px solid gray;
    justify-content: space-between;
    align-items: center;
  }

  & > ul li div {
    flex-grow: 1;
    margin-left: 1rem;
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
  }
`;

export const TagGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  & > button {
    background: ${({ theme }) => theme.colors.purple};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.6rem;
  }
`;
