import React from "react";
import workHistory from "@data/works.json";
import { Work } from "@/types/project.type";
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
    StyledTechText,
    StyledH3,
    StyledDiv,
    StyledListLink,
    StyledShadowBox,
    StyledBoxShadowHidden
} from "@styles/projects/ProjectStyle";
const Projects = () => {

    const works: Work[] = workHistory;

    return (
        <StyledProjectContainer>
            <StyledOrderedList>
                {works.map((work, index) => (
                    <StyledListItem key={index}>
                        <StyledProjectSection>
                            <StyledShadowBox />
                            <StyledProjectTime>{work.year}</StyledProjectTime>
                            <StyledWorkTitle>
                                <StyledH3>
                                    <StyledDiv>
                                        <StyledListLink href={"/"}>
                                            {/*<StyledBoxShadowHidden />*/}
                                            {work.role}
                                        </StyledListLink>
                                    </StyledDiv>
                                </StyledH3>
                                <StyledList>
                                    <StyledInnerListItem>
                                        {work.description}
                                    </StyledInnerListItem>
                                    <StyledListTech>
                                        {work.technologies.map((tech, techIndex) => (
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