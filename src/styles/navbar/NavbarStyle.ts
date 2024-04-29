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
  color: #C5D1EC;
`;
const StyledNav = styled.nav`
`;

const StyledSubHeader = styled.div`
  color: #C5D1EC;
  font-size: 1.25rem;
  margin-top: 1rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
    color: #C5D1EC;
`;

const StyledDiv = styled.div`
    color: #8296BD;
    max-width: 20rem;
    margin-top: 1rem;
`;

const StyledList = styled.ul`
`;

const StyledListItem = styled.li`
`;

const StyledListLink = styled(Link)`
    color: #8296BD;
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
`;

const StyledSocialList = styled.ul`
  align-items: center;
  display: flex;
  margin: 2rem 0 0 0.25rem;
  bottom: 0;
  padding: 0;
  list-style: none;
`
export { StyledDiv, StyledHead, StyledName, StyledSubHeader,  StyledNav, StyledLink, StyledList, StyledListItem, StyledListLink, StyledNavbarComponent, StyledSocialList };