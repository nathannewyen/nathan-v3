import styled from 'styled-components';
import Link from 'next/link'
const StyledNavbarComponent = styled.header`
  box-sizing: border-box;
  @media (min-width: 1024px) {
    padding: 6rem 0;
    justify-content: space-between;
    flex-direction: column;
    width: 50%;
    max-height: 100vh;
    display: flex;
    top: 0;
    position: sticky;
  }
`;
const StyledHead = styled.div`
`;
const StyledName = styled.h1`
  font-size: 3rem;
  line-height: 1;
  color: rgb(226 232 240);
`;
const StyledSubHeader = styled.h2`
  color: rgb(226 232 240);
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 0.75rem;
  
  @media (min-width: 640px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;
const StyledNav = styled.nav`
    @media (min-width: 1024px) {
      display: block;
    }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(226 232 240);
`;

const StyledDiv = styled.p`
    color: #8296BD;
    max-width: 20rem;
    margin-top: 1rem;
`;

const StyledList = styled.ul`
  width: max-content;
  margin-top: 4rem;
  
`;

const StyledListItem = styled.li`
  padding: 0.75rem 0;
`;

const NavIndicator = styled.span`
  display: inline-block;
  margin-right: 1rem;
  height: 1px;
  width: 2rem;
  background-color: #4a5568;
  transition: all 0.15s cubic-bezier(.4,0,.2,1);

  &.focused {
    width: 4rem;
    background-color: #edf2f7;
  }
`;

const StyledListLink = styled(Link)`
  color: #4a5568;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: rgb(15 23 42);

  &:hover {
    color: #edf2f7;

    ${NavIndicator} {
      width: 4rem;
      background-color: #edf2f7;
    }
  }

  &.focused {
    color: #edf2f7;

    ${NavIndicator} {
      width: 4rem;
      background-color: #edf2f7;
    }
  }
`;

const StyledSocialList = styled.ul`
  align-items: center;
  display: flex;
  margin: 2rem 0 0 0.25rem;
  bottom: 0;
  padding: 0;
  list-style: none;
`
export { StyledDiv, StyledHead, StyledName, StyledSubHeader,  StyledNav, StyledLink, StyledList, StyledListItem, StyledListLink, StyledNavbarComponent, StyledSocialList, NavIndicator };