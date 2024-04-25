import styled from 'styled-components';

const Container = styled.div`
  max-width: 1280px !important;
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