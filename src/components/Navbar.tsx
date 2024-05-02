import React, { useState } from "react";
import Icons from '@components/Icons/icons';
import personal from "@data/personal.json";
import navbarData from "@data/navbar.json";
import {StyledNav, StyledLink, StyledHead, StyledName, StyledSubHeader, StyledDiv, StyledList, StyledNavbarComponent, StyledListItem, StyledListLink, StyledSocialList, NavIndicator} from "@/styles/navbar/NavbarStyle";

const Navbar = ({ currentSection, setCurrentSection }: any) => {

    return (
        <StyledNavbarComponent>
            <StyledHead>
                <StyledName>
                    <StyledLink href="/">{personal.name}</StyledLink>
                </StyledName>
                <StyledSubHeader>{personal.jobTitle}</StyledSubHeader>
                <StyledDiv>{personal.description}</StyledDiv>
                <StyledNav>
                    <StyledList>
                        {navbarData.links.map((link, index) => (
                            <StyledListItem key={index}>
                                <StyledListLink
                                    href={link.url}
                                    className={link.name.toLowerCase() === currentSection ? 'focused' : ''}
                                    onClick={() => setCurrentSection(link.name)}
                                >
                                    {currentSection && <NavIndicator />}
                                    {link.name}
                                </StyledListLink>
                            </StyledListItem>
                        ))}
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