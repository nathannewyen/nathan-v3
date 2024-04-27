import React from "react";
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
    StyledTechItem
} from "@/styles/projects/ProjectStyle";

const Projects = () => {
    return (
        <StyledProjectContainer>
            <StyledOrderedList>
                <StyledListItem>
                    <StyledProjectSection>
                        <StyledProjectTime>2021 - Present</StyledProjectTime>
                        <StyledWorkTitle>
                            Software Engineer
                            <StyledList>
                                <StyledInnerListItem>
                                    Developed a custom Vue component/package tailored for the TradingView trading terminal, enabling its integration into both existing and new Vue-based web pages.
                                </StyledInnerListItem>
                                <StyledListTech>
                                    <StyledTechItem>Vue.js</StyledTechItem>
                                    <StyledTechItem>JavaScript</StyledTechItem>
                                    <StyledTechItem>HTML</StyledTechItem>
                                    <StyledTechItem>CSS</StyledTechItem>
                                </StyledListTech>
                            </StyledList>
                        </StyledWorkTitle>
                    </StyledProjectSection>
                </StyledListItem>
                <StyledListItem>
                    <StyledProjectSection>
                        <StyledProjectTime>2020 - 2021</StyledProjectTime>
                        <StyledWorkTitle>
                            Full Stack Developer
                            <StyledList>
                                <StyledInnerListItem>
                                    Developed a custom e-commerce platform for a client using React, Node.js, and MongoDB, offering a tailored shopping experience for their customers.
                                </StyledInnerListItem>
                                <StyledInnerListItem>
                                    Implemented a custom content management system (CMS) to allow the client to manage products, orders, and customer data with ease.
                                </StyledInnerListItem>
                                <StyledInnerListItem>
                                    Integrated various payment gateways, including Stripe and PayPal, to facilitate secure and seamless transactions.
                                </StyledInnerListItem>
                                <StyledInnerListItem>
                                    Optimized the platform for performance and search engine optimization (SEO), resulting in increased traffic and sales for the client.
                                </StyledInnerListItem>
                                <StyledInnerListItem>
                                    Demonstrated proficiency in React, Node.js, and MongoDB, delivering a scalable and user-friendly e-commerce solution.
                                </StyledInnerListItem>
                            </StyledList>
                        </StyledWorkTitle>
                    </StyledProjectSection>
                </StyledListItem>
            </StyledOrderedList>
        </StyledProjectContainer>
    );
}
export default Projects;