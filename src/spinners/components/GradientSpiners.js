import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateKeyframe = () => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Component = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 120px;
  height: 120px;
  border: 5px solid #1d1f21;
  border-radius: 50%;
  box-shadow: 5px 5px 8px #111213, -5px -5px 8px #292c2f;
  overflow: hidden;
  
  &:before {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 5px solid #1d1f21;
    border-radius: 50%;
    background-color: #1d1f21;
    box-shadow: inset 5px 5px 8px #111213, inset -5px -5px 8px #292c2f;
    z-index: 2;
  }
`;
const Wrapper = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(-225deg, #ff0089 0%, #00ba9d 100%);
  filter: blur(20px);
  animation: ${rotateKeyframe} 2s linear infinite;
`;

const GradientSpinner = () => (
    <Component>
        <Wrapper/>
    </Component>
);

export default GradientSpinner;