import React from 'react';
import styled from 'styled-components';
import Card from './components/Card';

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: white;
  perspective: 1000px;
`;

const WatchingCardPage = () => {
    return (
        <Page>
            <Card/>
        </Page>
    );
};

export default WatchingCardPage;