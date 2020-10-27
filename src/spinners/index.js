import React from 'react';
import styled from 'styled-components';
import DotSpinner from './components/DotSpinner';
import BandSpinner from './components/BandSpinner';

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
        </Page>
    );
};

export default SpinnersPage;