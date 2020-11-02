import React from 'react';
import styled from 'styled-components';
import ButtonsManager from './containers/ButtonsManager';

const Page = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background-color: white;
`;

const ParticlesButtonsPage = () => {
    return (
        <Page>
            <ButtonsManager/>
        </Page>
    );
};

export default ParticlesButtonsPage;