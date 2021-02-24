import React from 'react';
import styled, { keyframes } from 'styled-components';
import asteroid from './images/asteroid.png';

const pulseKeyframe = () => keyframes`
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;
const asteroidKeyframe = () => keyframes`
  0% {
    transform: translate(-2px, 2px);
  }
  50% {
    transform: translate(2px, -2px);
  }
`;

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #ffeb3b;
`;
const Pulse = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #ff5722;
`;
const Dot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #ff5722;
  animation: ${pulseKeyframe} 2.5s linear infinite;
  animation-delay: ${({ index }) => -(index + 1) * 500}ms;
`;
const Asteroid = styled.div`
  position: relative;
  top: 50px;
  text-align: center;
  animation: ${asteroidKeyframe} 500ms linear infinite;
  
  
  &::before {
    content: '';
    position: absolute;
    top: -174px;
    left: 170px;
    transform: rotateZ(-135deg) translateX(-50%);
    width: 26px;
    height: 250px;
    background: linear-gradient(#ffeb3b, transparent);
    z-index: -1;
  }
  &::after {
    content: '';
    position: absolute;
    top: -174px;
    left: 170px;
    transform: rotateZ(-135deg) translateX(-50%);
    width: 26px;
    height: 250px;
    background: linear-gradient(#ffeb3b, transparent);
    filter: blur(20px);
    z-index: -1;
  }
`;


const PulsePage = () => {
    return (
        <Page>
            <Pulse>
                {[...Array(5)].map((_, i) =>
                    <Dot index={i} key={i} />
                )}
                <Asteroid>
                    <img src={asteroid}/>
                </Asteroid>
            </Pulse>
        </Page>
    );
};

export default PulsePage;