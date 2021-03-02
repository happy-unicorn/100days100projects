import React from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';
import Track from './Track';
import Thumb from './Thumb';
import Text from '../Text';

const Component = styled.div``;
const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 10px;
`;

const Slider = ({ defaultValue, text, value, min=0, max=1, step=0.05, onChange }) => {
  return (
    <Component>
      <Text text={text} value={value}/>
      <StyledSlider
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        renderTrack={Track}
        renderThumb={Thumb}
      />
    </Component>
  );
};

export default Slider;