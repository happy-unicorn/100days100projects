import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  display: flex;
  position:relative;
  justify-content: space-between;
`;
const Circle = styled.div`
  background-color: ${({ isCurrent }) => isCurrent ? 'green' : 'red'};
  cursor: pointer;
`;
const Progress = styled.div`
  position: absolute;
`;

const ProgressBar = ({ numberOfSteps, currentStep, setCurrentStep }) => {
    const circles = Array.from({ length: numberOfSteps }, (_, index) => {
        return (
            <Circle
                isCurrent={index + 1 === currentStep}
                onClick={() => setCurrentStep(index + 1)}
                key={index}
            >
                {index + 1}
            </Circle>
        );
    });

    return (
        <Component>
            {circles}
            <Progress/>
        </Component>
    );
};

export default ProgressBar;