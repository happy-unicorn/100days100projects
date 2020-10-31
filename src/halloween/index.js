import React from 'react';
import styled from 'styled-components';
import Halloween from './containers/Halloween';

const Page = styled.div`
  display:flex;
  height: 100%;
`;

const HalloweenPage = (props) => {
    return (
        <Page>
            <Halloween/>
        </Page>
    );
};

export default HalloweenPage;