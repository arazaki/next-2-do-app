import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  width: 120px; /* the size */
  padding: 15px; /* the border thickness */
  background: #fff; /* the color */

  aspect-ratio: 1;
  border-radius: 50%;
  --_m: conic-gradient(#0000, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  box-sizing: border-box;
  animation: load 1s linear infinite;

  @keyframes load {
    to {
      transform: rotate(1turn);
    }
  }
`;
