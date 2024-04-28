import React from "react";
import About from "./About/About";
import Projects from "./Projects/Projects";
import styled from "styled-components";

const Container = styled.div``

const Main = () => {
    return (
        <Container>
            <About />
            <Projects />
        </Container>
    );
}

export default Main;