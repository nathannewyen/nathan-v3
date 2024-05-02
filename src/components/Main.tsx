import React from "react";
import About from "./About/About";
import Experiences from "@components/Experiences/Experiences";
import Projects from "@components/Projects/Projects";
import styled from "styled-components";

const Container = styled.div`
  padding: 6rem 0;
  width: 50%;
`

const Main = ({ sectionRefs }: any) => {
    return (
        <Container>
            <About ref={sectionRefs['About']} />
            <Experiences ref={sectionRefs["Experience"]} />
            <Projects  />
        </Container>
    );
}

export default Main;