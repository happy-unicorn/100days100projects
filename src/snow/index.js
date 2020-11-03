import React from 'react';
import styled from 'styled-components';
import Snow from './containers/Snow';

const Page = styled.div`
  display: flex;
  height: 100%;
`;

const SnowPage = () => {
    return (
        <Page>
            <Snow/>
        </Page>
    );
};

export default SnowPage;