import React from 'react';
import styled from 'styled-components';
import ButtonsManager from './containers/ButtonsManager';

const Page = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ParticlesButtonsPage = () => {
    return (
        <Page>
            <ButtonsManager/>
        </Page>
    );
};

export default ParticlesButtonsPage;