import React, { useEffect, useState } from "react";
import { StyledButtonContainer, StyledButton, StyledImage } from "@styles/button/ButtonStyle";

const Button = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const checkScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    return (
        <StyledButtonContainer>
            <StyledButton className={isVisible ? 'visible' : ''} onClick={scrollToTop}>
                <StyledImage src="/images/rotate.gif" alt="rotate" />
            </StyledButton>
        </StyledButtonContainer>
    );
}

export default Button;