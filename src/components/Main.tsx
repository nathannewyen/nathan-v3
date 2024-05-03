import React from "react";
import About from "./About/About";
import Experiences from "@components/Experiences/Experiences";
import Projects from "@components/Projects/Projects";
import Footer from "@components/Footer/Footer";
import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 1024px) {
    padding: 6rem 0;
    width: 50%;
  }
  
  padding-top: 6rem;
`

const Main = ({ sectionRefs }: any) => {
    return (
        <Container>
            <About ref={sectionRefs["About"]} />
            <Experiences ref={sectionRefs["Experience"]} />
            <Projects ref={sectionRefs["Project"]} />
            <Footer />
        </Container>
    );
}

export default Main;