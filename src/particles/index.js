import React from 'react';
import styled from 'styled-components';
import Particles from './containers/Particles';

const Page = styled.div`
  height: 100%;
`;

const ParticlesPage = (props) => {
    return (
        <Page>
            <Particles/>
        </Page>
    );
};

export default ParticlesPage;