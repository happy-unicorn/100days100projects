import React from 'react';
import styled from 'styled-components';
import Generator from './containers/Generator';

const Page = styled.div`
  height: 100%;
  width: 100%;
`;

const NeuGeneratorPage = () => {
    return (
        <Page>
            <Generator/>
        </Page>
    );
};

export default NeuGeneratorPage;