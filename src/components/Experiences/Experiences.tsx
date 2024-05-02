import React, {forwardRef} from "react";
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
    StyledDivResume,
    StyledLinkResume,
    StyledFillButton,
    StyledImageIcon
} from "@styles/experiences/ExperienceStyle";

const Experiences = forwardRef<HTMLDivElement>((props, ref) => {
    const works: Work[] = workHistory;

    return (
        <StyledExperienceContainer id="experience" ref={ref}>
            <StyledOrderedList>
                {works.map((work, index) => (
                    <StyledLink key={index} href={work.link} target="_blank" rel="noopener noreferrer">
                        <StyledListItem>
                                <StyledExperienceSection>
                                    <StyledShadowBox/>
                                    <StyledExperienceTime>{work.year}</StyledExperienceTime>
                                    <StyledWorkTitle>
                                        <StyledH3>
                                            <StyledDiv>
                                                    {work.role} · {work.company}
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
                        </StyledListItem>
                    </StyledLink>
                ))}
            </StyledOrderedList>
            <StyledDivResume>
                <StyledLinkResume href="/static/resume.pdf" target="_blank" rel="noopener noreferrer">
                    View Full Résumé <ArrowUpRight/>
                </StyledLinkResume>
                {Array(4).fill(null).map((_, index) => (
                    <StyledFillButton key={index}>
                        <StyledImageIcon src="chrome-extension://gphandlahdpffmccakmbngmbjnjiiahp/img/icon-fill.png" />
                    </StyledFillButton>
                ))}
            </StyledDivResume>
        </StyledExperienceContainer>
    );
});
Experiences.displayName = 'Experiences';
export default Experiences;