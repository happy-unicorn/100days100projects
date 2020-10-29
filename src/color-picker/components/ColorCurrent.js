import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  height: 25px;
  width: 25px;
  background-color: #fff;
  background-image: 
    linear-gradient(45deg, #bbb 25%, transparent 25%, transparent 75%, #bbb 75%, #bbb), 
    linear-gradient(45deg, #bbb 25%, transparent 25%, transparent 75%, #bbb 75%, #bbb);
  background-size: 10px 10px;
  background-position:0 0, 5px 5px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ColorCurrent = ({ color }) => {
    return (
        <Component>
            <Wrapper style={{backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`}}/>
        </Component>
    );
};

export default ColorCurrent;