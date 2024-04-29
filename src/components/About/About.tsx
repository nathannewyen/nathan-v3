import React from "react";
import aboutData from "@data/profile.json";
import {Container, StyledAboutContainer, StyledParagraph} from "@/styles/about/AboutStyle";

const About = () => {
    return (
        <Container>
            <StyledAboutContainer>
                {aboutData.paragraphs.map((paragraph: string, index: number) => (
                    <StyledParagraph key={index} $isFirst={index === 0}>
                        {paragraph}
                    </StyledParagraph>
                ))}
            </StyledAboutContainer>
        </Container>
    );
}

export default About;