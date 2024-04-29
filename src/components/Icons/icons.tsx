import React from 'react';
import { StyledIcon } from "@styles/icons/IconStyle";
import GithubIcon from './github';
import LinkedInIcon from './linkedin';
import MailIcon from './mail';

const icons = [
    GithubIcon,
    LinkedInIcon,
    MailIcon,
];

const Icons = () => (
    <>
        {icons.map((Icon, index) => (
            <StyledIcon key={index}>
                <Icon />
            </StyledIcon>
        ))}
    </>
);

export default Icons;