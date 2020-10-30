import React from 'react';
import styled from 'styled-components';
import SlidersManager from './containers/SlidersManager';

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SliderPage = (props) => {
    return (
        <Page>
            <SlidersManager/>
        </Page>
    );
};

export default SliderPage;