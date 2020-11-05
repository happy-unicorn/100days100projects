import React from 'react';
import styled from 'styled-components';
import Slider from './containers/Slider';
import SimpleSlider from './containers/SimpleSlider';
import images from './images';

const Page = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`;
const Title = styled.h1`
  color: white;
`;

const ImageSliderPage = () => {
    return (
        <Page>
            <Title>
                Slider (with JS)
            </Title>
            <Slider images={images}/>
            <Title>
                Simple Slider (only CSS)
            </Title>
            <SimpleSlider images={images}/>
        </Page>
    );
};

export default ImageSliderPage;