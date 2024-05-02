import React, {forwardRef} from "react";
import aboutData from "@data/profile.json";
import { Container, StyledAboutContainer, StyledParagraph, StyledContactMe } from "@/styles/about/AboutStyle";

const About = forwardRef<HTMLDivElement>((props, ref) => {
    const renderParagraph = (paragraph: string, index: number) => {
        const isFirst = index === 0;
        if (paragraph.includes("contact me")) {
            const parts = paragraph.split("contact me");
            return (
                <StyledParagraph key={index} $isFirst={isFirst}>
                    {parts[0]}
                    <StyledContactMe href="mailto:nathan@nathannewyen.com">
                        contact me
                    </StyledContactMe>
                    {parts[1]}
                </StyledParagraph>
            );
        }
        return <StyledParagraph key={index} $isFirst={isFirst}>{paragraph}</StyledParagraph>;
    };

    return (
        <Container ref={ref} id={"about"}>
            <StyledAboutContainer>
                {aboutData.paragraphs.map(renderParagraph)}
            </StyledAboutContainer>
        </Container>
    );
})
About.displayName = "About";
export default About;