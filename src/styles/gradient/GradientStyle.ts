import styled from "styled-components";

const StyledGradientContainer = styled.div`
  background: radial-gradient(600px at 50% 50%, rgba(29, 78, 216, 0.15), transparent 80%);
  transition-duration: 0.3s;
  z-index: 1000;
  inset: 0;
  pointer-events: none;
  position: fixed;

  @media (min-width: 1024px) {
    position: absolute;
  }
`;

export { StyledGradientContainer };