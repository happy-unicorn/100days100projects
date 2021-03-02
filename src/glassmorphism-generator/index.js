import React from 'react';
import styled from 'styled-components';
import Generator from './containers/Generator';

const Page = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #0d1623;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  overflow: hidden;
`;

const GlassmorphismGeneratorPage = () => {
    return (
        <Page>
            <Generator/>
        </Page>
    );
};

export default GlassmorphismGeneratorPage;