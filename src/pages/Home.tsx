'use client'

import React from 'react';
import Navbar from '@components/Navbar';
import Main from '@components/Main';
import Button from '@/components/Button/Button';
import { Container, StyledHomeContainer } from '@/styles/home/HomeStyle';

const Home = () => {
    return (
        <Container>
            <StyledHomeContainer>
                <Navbar />
                <Main />
                <Button />
            </StyledHomeContainer>
        </Container>
    );
}

export default Home;