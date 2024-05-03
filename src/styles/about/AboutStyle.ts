import styled from 'styled-components';
import Link from "next/link";

const Container = styled.div`
  scroll-margin-top: 4rem;
  margin-bottom: 4rem;
  font-size: 1rem;
  
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
  color:  rgb(226 232 240);
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
  
`;
const StyledH2 = styled.h2`
  @media (min-width: 1024px) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  margin-bottom: 1rem;
  padding: 1.5rem 0;
  color: rgb(226 232 240);
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;
const StyledParagraph = styled.p<{ $isFirst: boolean }>`
  color: rgb(148 163 184);
  word-spacing: 0.1rem;
  line-height: 1.5;
  margin: ${props => props.$isFirst ? '0' : '1rem 0'};
`

export { Container, StyledAboutContainer, StyledParagraph, StyledContactMe, StyledH2 };