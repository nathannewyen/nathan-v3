import styled from "styled-components";
import Link from "next/link";

const StyledProjectContainer = styled.section`
  scroll-margin-top: 4rem;
  margin-bottom: 4rem;
  
  @media (min-width: 768px) {
    margin-bottom: 6rem;
  }
  
  @media (min-width: 1024px) {
    scroll-margin-top: 6rem;
    margin-bottom: 6rem;
  }
`;

const StyledProjectSection = styled.div``;

const StyledProjectList = styled.ul``;

const StyledProjectListItem = styled.li`
  margin-bottom: 3rem;
  transition: opacity 0.3s ease;
  opacity: 1;

  &:hover ~ & {
    opacity: 0.5;
  }
`

const StyledProject = styled.div`
  position: relative;
  display: grid;
  padding-bottom: 0.25rem;

  @media (min-width: 640px) {
    gap: 2rem;
    grid-template-columns: repeat(8 ,minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    gap: 1rem;
  }
`

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

const StyledProjectImg = styled.img`
  color: transparent;
  border-color: rgba(226,232,240, .1);
  border-width: 2px;
  border-style: solid;
  border-radius: 0.25rem;
  z-index: 1;
  transition: border-color .25s cubic-bezier(.4,0,.2,1);
  
  @media (min-width: 640px) {
    order: 1;
    grid-column: span 2 / span 2;
  }
`;

const StyledProjectContent = styled.div`
  z-index: 10;
  
  @media (min-width: 640px) {
    grid-column: span 6 / span 6;
    order: 2;
  }
`;

const StyledProjectName = styled.h3`
  color: rgb(226 232 240);
`;
const StyledSpan = styled.span`
  display: inline-block;
  transition-property: transform;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .25s;

  &:hover {
    transform: translate(3px, -2px);
  }
`;
const StyledProjectLink = styled(Link)`
  font-weight: 500;
  font-size: 1rem;
  align-items: center;
  display: inline-flex;
  text-decoration: none;

  &:hover ${StyledShadowBox} {
    opacity: 1;
    visibility: visible;
    background-color: rgba(31, 41, 55, 0.5);
    box-shadow: inset 0 1px 0 0 rgba(148,163,184,0.1), 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  }

  &:hover {
    ${StyledSpan} {
      transform: translate(3px, -2px);
    }
  }

  &:hover ${StyledProjectImg} {
    border-color: rgb(226, 232, 240);
  }
`;
const StyledProjectDesc = styled.p`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
  color: rgb(148 163 184);
  font-weight: 400;
  line-height: 1.5rem;
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
  text-transform: capitalize;
  color: rgb(94 234 212);
`

export { StyledProjectContainer, StyledProjectSection, StyledProjectList, StyledProjectListItem, StyledProject, StyledShadowBox, StyledProjectImg, StyledProjectContent, StyledProjectName, StyledProjectDesc, StyledProjectLink, StyledSpan, StyledListTech, StyledTechItem, StyledTechText }