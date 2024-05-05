import styled from "styled-components";
import Link from 'next/link';

const StyledFooterContainer = styled.footer`
  padding-bottom: 4rem;
  color: rgb(100 116 139);
  font-size: 0.875rem;
  line-height: 1.25rem;
  max-width: 28rem;
    @media (min-width: 640px) {
      padding: 0;
    }
`;

const StyledFooterContent = styled.p``

const StyledLink = styled.a`
  color: rgb(148, 163, 184);
  font-weight: 500;
  text-decoration: none;
  transition: color .25s cubic-bezier(.4,0,.2,1);
  
  &:hover {
    color: rgb(94 234 212);
  }
`;

export { StyledFooterContainer, StyledFooterContent, StyledLink }