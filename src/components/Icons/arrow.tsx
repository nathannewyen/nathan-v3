import React from 'react';
import styled from 'styled-components';

export const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  margin-left: 0.25rem;
  transition-property: transform;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .15s;
  transform: translate(0, 0);

  &:hover {
    transform: translate(3px, -2px);
  }
`;

export const StyledArrowRight = styled.span`
  display: flex;
  align-items: center;
  margin-left: 0.25rem;
  transition-property: transform;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .15s;
  transform: translate(0, 0);

  &:hover {
    transform: translate(8px, 0);
  }
`;

export const StyledArrowLeft = styled.span`
  margin-right: 0.25rem;
  transition: transform 0.15s cubic-bezier(.4,0,.2,1);
`

const ArrowUp = () => (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M16 9l-4 -4" /><path d="M8 9l4 -4" />
    </svg>
);

const ArrowUpRight = () => (
    <StyledIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 7l-10 10" />
            <path d="M8 7l9 0l0 9" />
        </svg>
    </StyledIcon>
);

const ArrowRight = () => (
    <StyledArrowRight>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" />
        </svg>
    </StyledArrowRight>
)

const ArrowLeft = () => (
    <StyledArrowLeft>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" />
        </svg>
    </StyledArrowLeft>
)

export { ArrowUp, ArrowUpRight, ArrowRight, ArrowLeft };