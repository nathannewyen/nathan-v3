import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  max-width: 1280px;
`;

const StyledHomeContainer = styled.div`
  padding: 3rem 1.5rem;

  @media (min-width: 768px) {
    padding: 5rem 3rem;
  }
  
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    padding: 0 6rem;
  }
`;

export { Container, StyledHomeContainer };