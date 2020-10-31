import React from 'react';
import styled, { keyframes } from 'styled-components';
import pumpkin from '../images/pumpkin.png';

const shadowKeyframe = keyframes`
  0% {
    box-shadow: 0 0 100px 100px #ff0000;
  }
  10% {
    box-shadow: 0 0 100px 70px #ff0000;
  }
  20% {
    box-shadow: 0 0 100px 100px #ff0000;
  }
  30% {
    box-shadow: 0 0 100px 70px #ff0000;
  }
  40% {
    box-shadow: 0 0 100px 100px #ff0000;
  }
  50% {
    box-shadow: 0 0 100px 70px #ff0000;
  }
  60% {
    box-shadow: 0 0 100px 100px #ff0000;
  }
  70% {
    box-shadow: 0 0 100px 70px #ff0000;
  }
  80% {
    box-shadow: 0 0 100px 100px #ff0000;
  }
  100% {
    box-shadow: 0 0 100px 50px #ff0000;
  }
`;
const Component = styled.div`
  position: absolute;
  top: calc(50% - 250px);
  left: calc(50% - 250px);  
  width: 500px;
  height: 500px;
`;
const Wrapper = styled.div`
  position: absolute;
  height: 100%; 
  width: 100%;
  background-image: url(${pumpkin});
  background-size: 100%;
  background-repeat: no-repeat;
  transform-style: preserve-3d;
`;
const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 160px);
  height: 300px;
  width: 320px;
  background-color: #1d1f21;
`;
const Shadow = styled.div`
  animation: ${shadowKeyframe} linear 5s infinite alternate;
`;

const Pumpkin = () => {
    return (
        <Component>
            <Placeholder>
                <Shadow/>
            </Placeholder>
            <Wrapper/>
        </Component>
    );
};

export default Pumpkin;