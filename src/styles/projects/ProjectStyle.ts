import Link from 'next/link';
import styled from 'styled-components';

const StyledProjectContainer = styled.div`
`;

const StyledOrderedList = styled.ol`
  list-style-type: none;
`;

const StyledProjectSection = styled.div`
  position: relative;
  display: grid;
  padding-bottom: 1rem;
  transition: all;
  grid-template-columns: repeat(8 ,minmax(0, 1fr));
  gap: 8px;

  @media (min-width: 768px) {
    gap: 4px;
  }
`;

const StyledList = styled.ul`
  padding-left: 0;
`;

const StyledListItem = styled.li`
  margin-bottom: 3rem;
  list-style-type: none;
`;

const StyledInnerListItem = styled.li`
    margin-top: 0.5rem;
    list-style-type: none;
`;

const StyledProjectTime = styled.header`
  position: relative;
  z-index: 10;
  margin-bottom: 2px;
  margin-top: 1px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #4a5568;

  @media (min-width: 640px) {
    grid-column: span 2 / auto;
  }
`;

const StyledWorkTitle = styled.div`
  position: relative;
  z-index: 10;

  @media (min-width: 640px) {
    grid-column: span 6 / auto;
  }
`;

const StyledListLink = styled(Link)`
`;

const StyledListTech = styled.ul`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

const StyledTechItem = styled.li`
    list-style-type: none;
    padding: 0;
  margin-right: 0.375rem;
`;

const StyledTechText = styled.div`
  display: flex;
  align-items: center;
  border-radius: 9999px;
  background-color: rgba(56, 178, 172, 0.1);
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: #5EEAD4;
`

export { StyledProjectContainer, StyledOrderedList, StyledProjectSection, StyledList, StyledListItem, StyledInnerListItem,StyledProjectTime, StyledWorkTitle, StyledListLink, StyledListTech, StyledTechItem, StyledTechText };