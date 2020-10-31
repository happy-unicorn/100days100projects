import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import LeavesManager from '../services/LeavesManager';
import Pumpkin from '../components/Pumpkin';
import images from '../images';

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Halloween = () => {
    const container = useRef(null);

    useEffect(() => {
        const leaves = new LeavesManager(container.current, images);
        leaves.run();
    }, []);

    return (
        <Container>
            <Wrapper ref={container}/>
            <Pumpkin/>
        </Container>
    );
};

export default Halloween;