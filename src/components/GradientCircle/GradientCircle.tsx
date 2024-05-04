"use client"
import { useEffect, useRef } from "react";
import { StyledGradientContainer } from "@styles/gradient/GradientStyle";

export default function GradientCircle() {
    const circleRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (circleRef.current) {
                circleRef.current.style.background = `radial-gradient(600px at ${e.pageX}px ${e.pageY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <StyledGradientContainer
            ref={circleRef}
        ></StyledGradientContainer>
    );
};