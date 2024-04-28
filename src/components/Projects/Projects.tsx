import React from "react";
import projectsData from "@data/projects.json";
import { Project } from "@/types/project.type";
import {
    StyledProjectContainer,
    StyledOrderedList,
    StyledList,
    StyledListItem,
    StyledProjectSection,
    StyledInnerListItem,
    StyledProjectTime,
    StyledWorkTitle,
    StyledListTech,
    StyledTechItem,
    StyledTechText
} from "@styles/projects/ProjectStyle";
const Projects = () => {

    const projects: Project[] = projectsData;

    return (
        <StyledProjectContainer>
            <StyledOrderedList>
                {projects.map((project, index) => (
                    <StyledListItem key={index}>
                        <StyledProjectSection>
                            <StyledProjectTime>{project.year}</StyledProjectTime>
                            <StyledWorkTitle>
                                {project.role}
                                <StyledList>
                                    <StyledInnerListItem>
                                        {project.description}
                                    </StyledInnerListItem>
                                    <StyledListTech>
                                        {project.technologies.map((tech, techIndex) => (
                                            <StyledTechItem key={techIndex}>
                                                <StyledTechText>
                                                    {tech}
                                                </StyledTechText>
                                            </StyledTechItem>
                                        ))}
                                    </StyledListTech>
                                </StyledList>
                            </StyledWorkTitle>
                        </StyledProjectSection>
                    </StyledListItem>
                ))}
            </StyledOrderedList>
        </StyledProjectContainer>
    );
}

export default Projects;