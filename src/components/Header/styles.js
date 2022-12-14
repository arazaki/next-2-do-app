import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > a {
    font-size: 2rem;
    color: white;
    text-decoration: none;
    display: block;
    margin: 1rem 2rem;
  }

  & > a.selected {
    color: yellow;
  }
`;

export const TopHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem 0 3rem;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    & > a,
    button {
      text-decoration: none;
      color: white;
      font-size: 1.6rem;
      cursor: pointer;
      border: none;
      background-color: transparent;
    }
  }
`;
