import React from "react";
import {StyledNav, StyledLink, StyledHeader, StyledSubHeader, StyledDiv, StyledList, StyledNavbarComponent, StyledListItem, StyledListLink} from "@/styles/navbar/NavbarStyle";

const Navbar = () => {
    return (
        <StyledNavbarComponent>
            <StyledHeader>
                <StyledLink href="/">Nhan Nguyen</StyledLink>
                <StyledSubHeader>Software Engineer</StyledSubHeader>
                <StyledDiv>I build pixel-perfect, engaging, and accessible digital experiences.</StyledDiv>
            </StyledHeader>
            <StyledNav>
                <StyledList>
                    <StyledListItem><StyledListLink href="#about">About</StyledListLink></StyledListItem>
                    <StyledListItem><StyledListLink href="#experience">Experience</StyledListLink></StyledListItem>
                    <StyledListItem><StyledListLink href="#projects">Projects</StyledListLink></StyledListItem>
                </StyledList>
            </StyledNav>
        </StyledNavbarComponent>
    );
}

export default Navbar;