'use client'

import React, {createRef, useEffect, useState} from 'react';
import Navbar from '@components/Navbar';
import Main from '@components/Main';
import Button from '@/components/Button/Button';
import { Container, StyledHomeContainer } from '@/styles/home/HomeStyle';

import navbarData from "@data/navbar.json";

const Home = () => {
    const [currentSection, setCurrentSection] = useState("");
    const sectionRefs = navbarData.links.reduce((refs: {[key: string]: React.RefObject<HTMLDivElement>}, link) => {
        refs[link.name] = createRef<HTMLDivElement>();
        return refs;
    }, {});

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const visibleSection = entries.find(entry => entry.isIntersecting);
                if (visibleSection) {
                    setCurrentSection(visibleSection.target.id);
                }
            },
            { threshold: 0.5 }
        );

        Object.values(sectionRefs).forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            Object.values(sectionRefs).forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [ sectionRefs ]);

    return (
        <Container>
            <StyledHomeContainer>
                <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
                <Main sectionRefs={sectionRefs} />
                <Button />
            </StyledHomeContainer>
        </Container>
    );
}

export default Home;