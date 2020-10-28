import React from 'react';
import styled from 'styled-components';
import ColorPicker from './containers/ColorPicker';

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ColorPickerPage = (props) => {
    return (
        <Page>
            <ColorPicker/>
        </Page>
    );
};

export default ColorPickerPage;