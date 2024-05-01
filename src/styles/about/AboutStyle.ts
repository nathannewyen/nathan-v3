import styled from 'styled-components';
import Link from "next/link";

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

const StyledContactMe = styled(Link)`
  color:  #ffffff;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
  
`;
const StyledParagraph = styled.p<{ $isFirst: boolean }>`
  word-spacing: 0.1rem;
  line-height: 1.5;
  margin: ${props => props.$isFirst ? '0' : '1rem 0'};
`

export { Container, StyledAboutContainer, StyledParagraph, StyledContactMe };