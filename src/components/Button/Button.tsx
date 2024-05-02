import React from "react";
import { ArrowUp } from "@components/Icons/arrow";
import { StyledButtonContainer, StyledButton } from "@styles/button/ButtonStyle";

const Button = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <StyledButtonContainer>
            <StyledButton onClick={scrollToTop}>
                <ArrowUp />
            </StyledButton>
        </StyledButtonContainer>
    );
}

export default Button;