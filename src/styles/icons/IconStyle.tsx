import styled from 'styled-components';
import Link from "next/link";

const StyledIcon = styled.li`
  fill: #8296BD;
  margin-right: 1.25rem;
  font-size: 0.75rem;
`;

const StyledIconLink = styled(Link)`
  color: rgb(148 163 184);
  transition: color .25s cubic-bezier(.4,0,.2,1);
  
    &:hover {
        color: rgb(226, 232, 240);
    }
`

export { StyledIcon, StyledIconLink };