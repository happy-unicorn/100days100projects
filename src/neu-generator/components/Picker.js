import React, { useState } from 'react';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';

const Component = styled.div`
  position: relative;
  align-self: center;
  height: 100px;
  width: calc(30%);
  border-radius: 5px;
  background-color: ${({ theme: { color } }) => color};
`;
const Trigger = styled.div`
  box-sizing: border-box;
  height: 90px;
  width: auto;
  margin: 5px;
  border-radius: 3px;
  background-color: rgb(${({ color: { r, g, b } }) => `${r}, ${g}, ${b}`});
`;
const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 55px;
`;

const Picker = ({ color, onColorChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onClick = () => {
    setIsVisible(prevIsVisible => !prevIsVisible)
  };

  return (
    <Component>
      <Trigger color={color} onClick={onClick}/>
      {isVisible ? <Wrapper><SketchPicker width={'100%'} color={color} onChange={onColorChange} presetColors={[]} disableAlpha/></Wrapper> : null}
    </Component>
  );
};

export default Picker;