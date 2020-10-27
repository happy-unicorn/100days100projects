import React from 'react';
import styled from 'styled-components';
import DotSpinner from './components/DotSpinner';
import BandSpinner from './components/BandSpinner';
import GradientSpinner from './components/GradientSpiners';
import GradientServerLine from './components/GradientSpinnerLine';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > div {
    margin-top: 50px;
  }
`;

const SpinnersPage = () => {
    return (
        <Page>
            <DotSpinner/>
            <BandSpinner/>
            <GradientSpinner/>
            <GradientServerLine/>
        </Page>
    );
};

export default SpinnersPage;