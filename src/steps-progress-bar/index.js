import React from 'react';
import styled from 'styled-components';
import StepsManager from './containers/StepsManager';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepsProgressBarPage = () => {
    return (
        <Page>
            <StepsManager numberOfSteps={5}/>
            <StepsManager numberOfSteps={3}/>
        </Page>
    );
};

export default StepsProgressBarPage;