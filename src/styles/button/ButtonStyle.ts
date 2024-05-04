import styled from 'styled-components';

const StyledButtonContainer = styled.div`
`

const StyledButton = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 0;
  display: inline-flex;
  background-color: transparent;
  border: none;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
  cursor: pointer;
  padding: 1rem 0.5rem;
  align-items: center;
  &.visible {
    opacity: 1;
  }
`;

const StyledImage = styled.img<{ src: string }>`
    width: 100px;
    height: 86px;
`;

export { StyledButtonContainer, StyledButton, StyledImage };