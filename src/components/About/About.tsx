import React from "react";
import {Container, StyledAboutContainer, StyledParagraph} from "@/styles/about/AboutStyle";

const About = () => {
    return (
        <Container>
            <StyledAboutContainer>
                <StyledParagraph>
                    I am a software engineer with expertise in front-end and back-end development. I have a strong passion for crafting engaging, accessible, and pixel-perfect digital experiences.
                </StyledParagraph>
                <StyledParagraph>
                    With experience in a wide range of technologies and frameworks, I am a continuous learner and a dedicated problem solver. My attention to detail and collaborative nature make me a valuable team player.
                </StyledParagraph>
                <StyledParagraph>
                    Currently, I am seeking new opportunities to work on exciting projects and further enhance my skills. If you are interested in collaborating or have any questions, please don&apos;t hesitate to contact me.
                </StyledParagraph>
            </StyledAboutContainer>
        </Container>
    );
}

export default About;