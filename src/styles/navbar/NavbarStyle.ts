import styled from 'styled-components';
import Link from 'next/link'

const StyledNav = styled.nav`
`;

const StyledSubHeader = styled.div`
  color: #C5D1EC;
  font-size: 1.25rem;
  margin-top: 1rem;
`;

const StyledHead = styled.div`
`;

const StyledNavbarComponent = styled.header`
  @media (min-width: 1024px) {
    position: sticky;
    top: 0;
    display: flex;
    max-height: 100vh;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

const StyledLink = styled(Link)`
  color: #C5D1EC;
  text-decoration: none;
  font-size: 3rem;
  font-weight: bold;
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
  position: fixed; // or you can use 'sticky'
  bottom: 0;
  right: 0;
`

const StyledSocialIcon = styled.li`
`

const StyledSocialLink = styled(Link)`
`

export { StyledDiv, StyledHead ,StyledSubHeader,  StyledNav, StyledLink, StyledList, StyledListItem, StyledListLink, StyledNavbarComponent, StyledSocialLink, StyledSocialIcon, StyledSocialList };