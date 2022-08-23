import styled from "styled-components";

export const GroupButtons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  & > button {
    display: flex;
    align-items: center;
    border: none;
    padding: 0.8rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.purple};
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.6rem;
  }
`;
