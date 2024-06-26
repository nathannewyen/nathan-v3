import Link from 'next/link';
import styled from 'styled-components';
import { StyledIcon } from '@components/Icons/arrow';

const StyledExperienceContainer = styled.div`
  margin-bottom: 4rem;
  
    @media (min-width: 768px) {
        scroll-margin-top: 6rem;
      margin-bottom: 6rem;
    }
  
    @media (min-width: 1024px) {
        scroll-margin-top: 6rem;
        margin-bottom: 9rem;
    }
`;

const StyledOrderedList = styled.ol`
  list-style-type: none;
  padding: 0;
`;
const StyledShadowBox = styled.div`
  position: absolute;
  top: -1rem;
  bottom: -1rem;
  left: -1rem;
  right: -1rem;
  z-index: 0;
  border-radius: 0.375rem;
  opacity: 0;
  visibility: hidden;

  transition-property: background-color, box-shadow, opacity, visibility;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .25s;

  @media (min-width: 1024px) {
    top: -1.5rem;
    bottom: -1.5rem;
    left: -1.5rem;
    right: -1.5rem;
  }
`;
const StyledExperienceSection = styled.div`
  position: relative;
  display: grid;
  padding-bottom: 0.25rem;

  &:hover ${StyledShadowBox} {
    opacity: 1;
    visibility: visible;
    background-color: rgba(31, 41, 55, 0.5);
    box-shadow: inset 0 1px 0 0 rgba(148,163,184,0.1), 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  }

  @media (min-width: 640px) {
    gap: 2rem;
    grid-template-columns: repeat(8 ,minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;
const StyledExperienceTime = styled.header`
  position: relative;
  z-index: 10;
  margin-bottom: 0.5rem;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  line-height: 1rem;
  color: rgb(100 116 139);

  @media (min-width: 640px) {
    grid-column: span 2 / span 2;
  }
`;
const StyledListItem = styled.li`
  margin-bottom: 3rem;
  list-style-type: none;
  transition: opacity 0.3s ease;
  opacity: 1;

  &:hover ~ & { 
    opacity: 0.5;
  }
`;

const StyledInnerListItem = styled.p`
    color: rgb(148 163 184);
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5rem;
`;

const StyledWorkTitle = styled.div`
  z-index: 10;

  @media (min-width: 640px) {
    grid-column: span 6 / span 6;
  }
`;

const StyledH3 = styled.h3`
  color: rgb(226 232 240);
  font-weight: 500;
  font-size: 1rem;
`
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLink = styled(Link)`
  font-size: 1rem;
  display: inline-flex;
  align-items: baseline;
  color: inherit;
  text-decoration: none;
  &:hover {
    ${StyledIcon} {
      transform: translate(3px, -2px);
    }
  }
`;
const StyledList = styled.ul`
  padding-left: 0;
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
    margin-top: 0.5rem;
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
  color: rgb(94 234 212);
`

const StyledDivResume = styled.div`
  margin-top: 3rem;
`

const StyledLinkResume = styled(Link)`
  color: rgb(226 232 240);
  font-weight: 600;
  font-size: 1rem;
  align-items: center;
  display: inline-flex;
  text-decoration: none;
  transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: rgb(94 234 212);
    ${StyledIcon} {
      transform: translate(3px, -2px);
    }
  }
`

const StyledFillButton = styled.div`
  display: inline-block;
  margin-left: 10px;
  width: 40px;
  cursor: pointer;
  background-color: rgb(255, 128, 21);
  padding: 2px 6px 2px 2px;
`

const StyledImageIcon = styled.img`
  background: none;
  vertical-align: middle;
  max-width: 100%;
`

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

export { StyledExperienceContainer, StyledOrderedList, StyledExperienceSection, StyledList, StyledListItem, StyledInnerListItem,StyledExperienceTime, StyledWorkTitle, StyledLink, StyledListTech, StyledTechItem, StyledTechText, StyledH3, StyledDiv, StyledShadowBox, StyledDivResume, StyledLinkResume, StyledFillButton, StyledImageIcon, StyledH2 };