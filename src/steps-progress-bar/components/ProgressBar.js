import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  display: flex;
  position:relative;
  justify-content: space-between;
  width: ${({ numberOfSteps }) => (numberOfSteps - 1) * 100}px;
`;
const CircleContainer = styled.div`
  display: flex;
  position: relative;
`;
const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(145deg, #1f2123, #1a1c1e);
  font-size: 18px;
  font-weight: bold;
  color: #c9c9cb;
  cursor: pointer;
  z-index: 3;
`;
const CircleShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 5px 5px 8px #111213, -5px -5px 8px #292c2f;
  z-index: 1;
`;
const CircleWrapper = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 70%;
  border-radius: 50%;
  background-color: ${({ isActive }) => isActive && '#485e44'};
`;
const Progress = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  top: calc(50% - 5px);
  left: 0;
  right: 0;
  height: 10px;
  margin-left: auto; 
  margin-right: auto; 
  width: calc(100% - 10px);
  background: linear-gradient(145deg, #1f2123, #1a1c1e);
  box-shadow: 5px 5px 8px #111213, -5px -5px 8px #292c2f;
  z-index: 2;
`;
const GreenLine = styled.div`
  width: ${({ currentStep }) => (currentStep - 1) * 100}px;
  height: 4px;
  background-color: #485e44;
`;

const ProgressBar = ({ numberOfSteps, currentStep, setCurrentStep }) => {
    const onCircleClick = (newStep) => {
        setCurrentStep(newStep);
    };

    const circles = Array.from({ length: numberOfSteps }, (_, index) => {
        return (
            <CircleContainer>
                <Circle
                    onClick={() => onCircleClick(index + 1)}
                    key={index}
                >
                    <CircleWrapper isActive={index + 1 <= currentStep}>
                        {index + 1}
                    </CircleWrapper>
                </Circle>
                <CircleShadow/>
            </CircleContainer>
        );
    });

    return (
        <Component numberOfSteps={numberOfSteps}>
            <Progress>
                <GreenLine currentStep={currentStep}/>
            </Progress>
            {circles}
        </Component>
    );
};

export default ProgressBar;