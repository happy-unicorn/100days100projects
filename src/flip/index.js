import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import girlInterested from './images/girlInterested.jpg'
import girlMysterious from './images/girlMysterious.jpg';

const triggerKeyframe = () => keyframes`
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
`;

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${({ flipped }) => flipped ? 'lightpink' : 'salmon'};
  transition: background-color 2s linear;
`;
const Box = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
  background-color: gray;
  transform-style: preserve-3d;
  perspective: 1000px;
  
  ${({ flipped }) => !flipped && css`
    animation: ${triggerKeyframe} 0.1s infinite 2s;
  `}
`;
const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  background: url(${({ image }) => image });
  background-size: cover;
  pointer-events: none;
  
  &:nth-child(2) {
    right: 0;
    background-position-x: 200px;
  }
  
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(${({ nextImage }) => nextImage });
    background-size: cover;
    transform-origin: right;
    transform: ${({ flipped }) => flipped ? 'rotateY(180deg)' : 'none'};
    transition: 2s;
    backface-visibility: hidden;
  }
  
  &:nth-child(2)::before {
    transform: ${({ flipped }) => flipped ? 'rotateY(180deg)' : 'rotateY(360deg)'};
    transform-origin: left;
    background-position-x: 200px;
  }
`;

const FlipPage = () => {
    const [flipped, setFlipped] = useState(true);

    const flipOnClick = () => {
        setFlipped(prevFlipped => !prevFlipped);
    };

    return (
        <Page flipped={flipped}>
            <Box flipped={flipped} onClick={flipOnClick}>
                <Background flipped={flipped} image={girlMysterious} nextImage={girlInterested}/>
                <Background flipped={!flipped} image={girlInterested} nextImage={girlMysterious}/>
            </Box>
        </Page>
    );
};

export default FlipPage;