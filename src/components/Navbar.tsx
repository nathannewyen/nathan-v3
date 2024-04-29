import React from "react";
import Icons from '@components/Icons/icons';
import {StyledNav, StyledLink, StyledHead, StyledName, StyledSubHeader, StyledDiv, StyledList, StyledNavbarComponent, StyledListItem, StyledListLink, StyledSocialList} from "@/styles/navbar/NavbarStyle";

const Navbar = () => {
    return (
        <StyledNavbarComponent>
            <StyledHead>
                <StyledName>
                    <StyledLink href="/">Nhan Nguyen</StyledLink>
                </StyledName>
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
                <Icons />
            </StyledSocialList>
        </StyledNavbarComponent>
    );
}

export default Navbar;