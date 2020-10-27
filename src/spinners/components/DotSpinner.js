import React from 'react';
import styled, { keyframes } from 'styled-components';

const dotShadowKeyframe = props => keyframes`
  0% {
    box-shadow: none;
  }
  100% {
    box-shadow: 5px 5px 8px #111213, -5px -5px 8px #292c2f;
  }
`;
const dotBackgroundKeyframe = props => keyframes`
  0% {
    background-color: #1d1f21;
  }
  50% {
    background-color: #1d1f21;  
  }
  100% {
    background-color: #485e44;
  }
`;
const Indicator = styled.div`
  display: flex;
  justify-content: space-between;
  top: calc(50% - 7.5px);
  left: calc(50% - 40px);
  width: 80px;
`;
const Dot = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  animation-duration: 500ms; 
  animation-iteration-count: infinite;
  animation-direction: alternate;
  &:nth-child(1) {
    animation-name: ${dotShadowKeyframe}, ${dotBackgroundKeyframe};
  }
  &:nth-child(2) {
    animation-name: ${dotShadowKeyframe}, ${dotBackgroundKeyframe};
    animation-delay: 150ms;
  }
  &:nth-child(3) {
    animation-name: ${dotShadowKeyframe}, ${dotBackgroundKeyframe};
    animation-delay: 300ms;
  }
`;

const DotSpinner = () => (
    <Indicator>
        <Dot/>
        <Dot/>
        <Dot/>
    </Indicator>
);

export default DotSpinner;