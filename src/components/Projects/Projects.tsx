import React from "react";
import {StyledProjectContainer, StyledOrderedList, StyledList, StyledListItem, StyledProjectNav, StyledProjectTime, StyledWorkTitle} from "@/styles/projects/ProjectStyle";

const Projects = () => {
    return (
        <StyledProjectContainer>
            <StyledOrderedList>
                <StyledList>
                    <StyledProjectNav>
                        <StyledProjectTime>2021 - Present</StyledProjectTime>
                        <StyledWorkTitle>Software Engineer</StyledWorkTitle>
                        <StyledListItem>
                           <StyledList>

                           </StyledList>
                        </StyledListItem>
                    </StyledProjectNav>
                </StyledList>
            </StyledOrderedList>
        </StyledProjectContainer>
    );
}
export default Projects;