import React, { useState } from 'react';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';

const Component = styled.div`
  position: relative;
  align-self: center;
  height: 40px;
  width: calc(100% - 8px);
  border-radius: 5px;
  background-color: #213a5a;
`;
const Trigger = styled.div`
  box-sizing: border-box;
  height: 30px;
  width: auto;
  margin: 5px;
  border: 3px solid #f0f8ff;
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