import styled from 'styled-components';
import Link from "next/link";
import {StyledArrowLeft, StyledIcon} from "@components/Icons/arrow";

export const ArchiveStyleContainer = styled.div`
  padding: 3rem 1.5rem;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    padding: 5rem 3rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 6rem;
  }
`;

export const ArchiveStyleBody = styled.div`
  @media (min-width: 1024px) {
    padding: 6rem 0;
  }
`
export const StyleLoadingContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
`;
export const ArchiveStyleNameButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: rgb(94 234 212);
  line-height: 1.25;
  font-weight: 600;
  align-items: center;
  display: inline-flex;
  margin-bottom: 0.5rem;

  &:hover ${StyledArrowLeft} {
    transform: translateX(-8px);
    transition: transform 0.15s cubic-bezier(.4,0,.2,1);
  }
`

export const ArchiveStyleH1 = styled.h1`
  color: rgb(226 232 240);
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.5rem;
  
  @media (min-width: 640px) {
    font-size: 3rem;
    line-height: 1;
  }
`

export const ArchiveStyleTable = styled.table`
  text-align: left;
  border-collapse: collapse;
  width: 100%;
  margin-top: 3rem;
`

export const ArchiveStyleThead = styled.thead`
  padding: 1.25rem 1.5rem;
  border-color: rgba(203,213,225,.1);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  z-index: 10;
  top: 0;
  position: sticky;

  @media (max-width: 768px) {
    &:nth-child(3), &:nth-child(4) {
      display: none;
    }
  }
`
export const ArchiveStyleTr = styled.tr`
  border-color: rgba(203,213,225,.1);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  opacity: 0;
  animation: show 0.25s forwards;

  &:last-child {
    border-bottom: none;
  }

  @keyframes show {
    to {
      opacity: 1;
    }
  }
`;
export const ArchiveStyleTd = styled.td`
  max-width: 150px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  vertical-align: top;
  padding: 1rem 1rem 1rem 0;
  color: rgb(148 163 184);

  @media (max-width: 768px) {
    &:nth-child(3), &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 425px) {
    &:nth-child(5) {
      display: none;
    }
  }
`;

export const ArchiveStyleTdName = styled.td`
  max-width: 150px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  vertical-align: top;
  padding: 1rem 1rem 1rem 0;
  color: rgb(226 232 240);

  @media (max-width: 768px) {
    &:nth-child(3), &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 425px) {
    &:nth-child(5) {
      display: none;
    }
  }
`;

export const ArchiveStyleTdLink = styled(Link)`
  color: rgb(226 232 240);
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
`;
export const ArchiveStyleTh = styled.th`
    color: rgb(226 232 240);
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-right: 2rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
  
   @media (min-width: 1024px) {
     display: table-cell;
   }

  @media (max-width: 768px) {
    &:nth-child(3), &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 425px) {
    &:nth-child(5) {
      display: none;
    }
  }
`

export const StyledListTech = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

export const StyledTechItem = styled.li`
    list-style-type: none;
    padding: 0;
    margin: 0.25rem 0.375rem 0.25rem 0;
`;
export const StyledTechText = styled.div`
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