import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import Rectangle from './Rectangle';
import useElement from '../hooks/useElement';
import useDragAndDrop from '../hooks/useDragAndDrop';

const Component = styled.div`
  position: relative;
  overflow: hidden;
`;
const Canvas = styled.canvas``;

const ColorBar = ({ setBarColor }) => {
    const canvas = useRef(null);
    const context = useRef(null);

    useEffect(() => {
        context.current = canvas.current.getContext('2d');
        const gradient = context.current.createLinearGradient(0, 0, 0, 250);
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];
        colors.forEach((color, index) => {
            gradient.addColorStop(index / (colors.length - 1), color);
        });
        context.current.fillStyle = gradient;
        context.current.fillRect(0, 0, 25, 250);
    }, []);

    const [setRectangle, setContainer]= useDragAndDrop((event) => {
        const { data: pixel } = context.current.getImageData(event.offsetX, event.offsetY, 1, 1);
        setBarColor({
            r: pixel[0],
            g: pixel[1],
            b: pixel[2]
        });
    }, 'vertical', {
        top: '-5px'
    });

    return (
        <Component ref={element => setContainer(element)}>
            <Canvas ref={canvas} width='25px' height='250px'/>
            <Rectangle reference={element => setRectangle(element)}/>
        </Component>
    );
};

export default ColorBar;