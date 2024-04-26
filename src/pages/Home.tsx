'use client'

import React from 'react';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import { Container, StyledHomeContainer } from '@/styles/home/HomeStyle';

const Home = () => {
    return (
        <Container>
            <StyledHomeContainer>
                <Navbar />
                <Main />
            </StyledHomeContainer>
        </Container>
    );
}

export default Home;