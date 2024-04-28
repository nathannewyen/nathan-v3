import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  max-width: 100vw;
  padding: 6rem;
`;

const StyledHomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  > * {
    flex: 1;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    > * {
      flex: 1;
    }
  }
`;

export { Container, StyledHomeContainer };