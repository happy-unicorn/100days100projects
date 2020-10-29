import React from 'react';
import styled from 'styled-components';
import Rectangle from './Rectangle';
import useDragAndDrop from '../hooks/useDragAndDrop';

const Component = styled.div`
  position: relative;
  background-color: #fff;
  background-image: 
    linear-gradient(45deg, #bbb 25%, transparent 25%, transparent 75%, #bbb 75%, #bbb), 
    linear-gradient(45deg, #bbb 25%, transparent 25%, transparent 75%, #bbb 75%, #bbb);
  background-size: 10px 10px;
  background-position:0 0, 5px 5px;
  overflow: hidden;
`;
const Gradient = styled.div`
  width: 100%;
  height: 100%;
`;

const TransparentBar = ({ color, mergeColor }) => {
    const [setRectangle, setContainer]= useDragAndDrop(({ xAxisRatio }) => {
        mergeColor({ a: xAxisRatio });
    }, 'horizontal', {
        left: `calc(100% * ${color.a})`
    });

    return (
        <Component ref={element => setContainer(element)}>
            <Gradient
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(${color.r}, ${color.g}, ${color.b}))`
                }}
            />
            <Rectangle reference={element => setRectangle(element)} rot={true}/>
        </Component>
    );
};

export default TransparentBar;