import React from 'react';
import styled from 'styled-components';
import DotSpinner from './components/DotSpinner';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > div {
    margin: 50px;
  }
`;

const SpinnersPage = () => {
    return (
        <Page>
            <DotSpinner/>
        </Page>
    );
};

export default SpinnersPage;