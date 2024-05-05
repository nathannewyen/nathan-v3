import { StyledFooterContainer, StyledFooterContent, StyledLink } from '@styles/footer/FooterStyle';
const Footer = () => {
    const links = [
        { name: 'Figma', url: 'https://www.figma.com/', text: 'Loosely designed in ' },
        { name: 'IntelliJ', url: 'https://www.jetbrains.com/idea/', text: ' and coded in ' },
        { name: 'Next.js', url: 'https://nextjs.org/', text: ' by yours truly. Built with ' },
        { name: 'Styled-component', url: 'https://styled-components.com/', text: ' and ' },
        { name: 'Vercel', url: 'https://vercel.com/', text: ', deployed with ' },
        { name: 'Inter', url: 'https://rsms.me/inter/', text: '. All text is set in the ' },
    ];
    return (
        <StyledFooterContainer>
            <StyledFooterContent>
                {links.map((link, index) => (
                    <span key={index}>
                        {link.text}<StyledLink href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</StyledLink>
                    </span>
                ))}
            </StyledFooterContent>
        </StyledFooterContainer>
    );
}

export  default Footer;