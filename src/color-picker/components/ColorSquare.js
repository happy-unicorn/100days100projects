import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Circle from './Circle';
import useDragAndDrop from '../hooks/useDragAndDrop';
import squareGradient from '../utils/squareGradient';

const Component = styled.div`
  position: relative;
  overflow: hidden;
`;
const Canvas = styled.canvas``;

const Square = ({ barColor, mergeColor }) => {
    const [offset, setOffset] = useState({
        offsetX: 1,
        offsetY: 1
    });
    const canvas =  useRef(null);
    const context =  useRef(null);

    useEffect(() => {
        context.current = canvas.current.getContext('2d');
    }, []);
    useEffect(() => {
        squareGradient(canvas.current, context.current, {
          topLeft: [barColor.r / 255, barColor.g / 255, barColor.b / 255, 1],
          topRight: [1, 1, 1, 1],
          bottomLeft: [0, 0, 0, 1],
          bottomRight: [0, 0, 0, 1]
        });
        const { data: pixel } = context.current.getImageData(offset.offsetX, offset.offsetY, 1, 1);
        mergeColor({
            r: pixel[0],
            g: pixel[1],
            b: pixel[2]
        });
    }, [barColor]);

    const [setCircle, setContainer]= useDragAndDrop((event) => {
        const { data: pixel } = context.current.getImageData(event.offsetX, event.offsetY, 1, 1);
        mergeColor({
            r: pixel[0],
            g: pixel[1],
            b: pixel[2]
        });
    }, 'both', {
        top: '-7.5px',
        left: '-7.5px'
    });

    return (
        <Component ref={element => setContainer(element)}>
            <Canvas ref={canvas} width='250px' height='250px'/>
            <Circle reference={element => setCircle(element)}/>
        </Component>
    );
};

export default Square;