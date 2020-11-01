import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ParticlesManager from '../services/ParticlesManager';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Canvas = styled.canvas`
  background-color: #1d1f21;
`;

const Particles = () => {
    const canvas = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        const particles = new ParticlesManager(canvas.current, container.current);
        particles.run();
        return () => {
            particles.stop();
        };
    }, []);

    return (
        <Container ref={container}>
            <Canvas ref={canvas}/>
        </Container>
    );
};

export default Particles;