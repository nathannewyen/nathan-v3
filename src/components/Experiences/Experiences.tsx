import React from "react";
import workHistory from "@data/works.json";
import { Work } from "@/types/project.type";
import { ArrowUpRight } from "@components/Icons/arrow";
import {
    StyledExperienceContainer,
    StyledOrderedList,
    StyledList,
    StyledListItem,
    StyledExperienceSection,
    StyledInnerListItem,
    StyledExperienceTime,
    StyledWorkTitle,
    StyledListTech,
    StyledTechItem,
    StyledTechText,
    StyledH3,
    StyledDiv,
    StyledLink,
    StyledShadowBox,
} from "@styles/projects/ProjectStyle";
const Experiences = () => {
    const works: Work[] = workHistory;

    return (
        <StyledExperienceContainer id={"#experience"}>
            <StyledOrderedList>
                {works.map((work, index) => (
                    <StyledListItem key={index}>
                        <StyledLink href={work.link} target="_blank" rel="noopener noreferrer">
                            <StyledExperienceSection>
                                <StyledShadowBox/>
                                <StyledExperienceTime>{work.year}</StyledExperienceTime>
                                <StyledWorkTitle>
                                    <StyledH3>
                                        <StyledDiv>
                                                {work.role}
                                            <ArrowUpRight/>
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
                            </StyledExperienceSection>
                        </StyledLink>
                    </StyledListItem>
                ))}
            </StyledOrderedList>
        </StyledExperienceContainer>
    );
}

export default Experiences;