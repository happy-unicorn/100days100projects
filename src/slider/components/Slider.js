import React, { useState } from 'react';
import styled from 'styled-components';
import useDragAndDrop from '../hooks/useDragAndDrop';

const Component = styled.div`
  position: relative;
  width: 300px;
  height: 6px;
  border-radius: 3px;
`;
const Dot = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 25px;
  height: 25px;
  border: 6px solid #485e44;
  border-radius: 50%;
  background-color: #333;
`;

const Slider = ({ propagateEvent, defaultPositions={} }) => {
    const [ratio, setRatio] = useState(defaultPositions.leftRatio || 0.5);

    const [setDot, setContainer]= useDragAndDrop((event) => {
        setRatio(event.xAxisRatio);
        propagateEvent && propagateEvent(event);
    }, 'horizontal', {
        leftRatio: 0.5,
        topRatio: 0.5,
        ...defaultPositions
    });
    return (
        <Component style={{ background: `linear-gradient(to right, #485e44 ${ratio * 100}%, #333 ${ratio * 100}%)` }} ref={element => setContainer(element)}>
            <Dot ref={element => setDot(element)}/>
        </Component>
    );
};

export default Slider;