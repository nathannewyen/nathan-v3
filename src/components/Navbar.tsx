import React from "react";
import {StyledNav, StyledLink, StyledHead, StyledSubHeader, StyledDiv, StyledList, StyledNavbarComponent, StyledListItem, StyledListLink, StyledSocialList, StyledSocialLink, StyledSocialIcon} from "@/styles/navbar/NavbarStyle";

const Navbar = () => {
    return (
        <StyledNavbarComponent>
            <StyledHead>
                <StyledLink href="/">Nhan Nguyen</StyledLink>
                <StyledSubHeader>Software Engineer</StyledSubHeader>
                <StyledDiv>I build pixel-perfect, engaging, and accessible digital experiences.</StyledDiv>
                <StyledNav>
                    <StyledList>
                        <StyledListItem><StyledListLink href="#about">About</StyledListLink></StyledListItem>
                        <StyledListItem><StyledListLink href="#experience">Experience</StyledListLink></StyledListItem>
                        <StyledListItem><StyledListLink href="#projects">Projects</StyledListLink></StyledListItem>
                    </StyledList>
                </StyledNav>
            </StyledHead>
            <StyledSocialList>
                <StyledSocialIcon>
                    <StyledSocialLink href={"/"}>X</StyledSocialLink>
                </StyledSocialIcon>
            </StyledSocialList>
        </StyledNavbarComponent>
    );
}

export default Navbar;