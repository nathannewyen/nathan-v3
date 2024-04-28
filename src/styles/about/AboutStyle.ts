import styled from 'styled-components';

const Container = styled.div`
  scroll-margin-top: 4rem;
  margin-bottom: 4rem;
  
    @media (min-width: 768px) {
      margin-bottom: 6rem;
    }
  
    @media (min-width: 1024px) {
      scroll-margin-top: 6rem;
      margin-bottom: 9rem;
    }
`;

const StyledAboutContainer = styled.div`
`;

const StyledParagraph = styled.p`
    word-spacing: 0.1rem;
    line-height: 1.5;
    margin-top: 1rem;
`

export { Container, StyledAboutContainer, StyledParagraph };