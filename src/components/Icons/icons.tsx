import React from 'react';
import { StyledIcon, StyledIconLink } from "@styles/icons/IconStyle";
import GithubIcon from './github';
import LinkedInIcon from './linkedin';
import MailIcon from './mail';

const icons = [
    { Icon: GithubIcon, url: "https://github.com/nathannewyen" },
    { Icon: LinkedInIcon, url: "https://www.linkedin.com/in/nhannguyen3112/" },
    { Icon: MailIcon, url: "mailto:nathan@nathannewyen.com" },
];

const Icons = () => (
    <>
        {icons.map((icon, index) => (
            <StyledIcon key={index}>
                <StyledIconLink href={icon.url} target="_blank" rel="noopener noreferrer">
                    <icon.Icon />
                </StyledIconLink>
            </StyledIcon>
        ))}
    </>
);

export default Icons;