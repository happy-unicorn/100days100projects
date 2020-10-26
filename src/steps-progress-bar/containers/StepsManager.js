import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  & button {
    margin: 20px;
  }
`;

const StepsManager = ({ numberOfSteps }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const decreaseStep = () => {
        setCurrentStep(prevStep => {
            if (prevStep > 1) {
                return prevStep - 1;
            }
            return 1;
        });
    };

    const increaseStep = () => {
        setCurrentStep(prevStep => {
            if (prevStep < numberOfSteps) {
                return prevStep + 1;
            }
            return numberOfSteps;
        });
    };

    return (
        <Container>
            <ProgressBar
                numberOfSteps={numberOfSteps}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
            />
            <ButtonWrapper>
                <Button
                    label={'Previous'}
                    isActive={currentStep > 1}
                    onClick={decreaseStep}
                />
                <Button
                    label={'Next'}
                    isActive={currentStep < numberOfSteps}
                    onClick={increaseStep}
                />
            </ButtonWrapper>
        </Container>
    );
};

export default StepsManager;