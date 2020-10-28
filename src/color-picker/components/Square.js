import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import colorWheel from '../images/colorWheel.png';

const Component = styled.canvas`
  border: 8px solid #1d1f21;
  border-radius: 50%;
  box-shadow: 5px 5px 8px #111213, -5px -5px 8px #292c2f;
`;

const Square = () => {
    const a = useRef(null);
    useEffect(() => {
        // if (a) {
            console.log(a);
            const image = new Image(250, 250);
            image.onload = () => {
                const canvasContext = a.current.getContext('2d');
                canvasContext.drawImage(image, 0, 0, image.width, image.height);
            };
            image.src = colorWheel;
            a.current.onclick = function(mouseEvent){
                const canvasContext = a.current.getContext('2d');
              var imgData = canvasContext.getImageData(mouseEvent.offsetX, mouseEvent.offsetY, 1, 1);
              var rgba = imgData.data;

              console.log("rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")");
            }
        // }
    }, [a]);

    return (
        <Component ref={a} width='250px' height='250px'/>
    );
};

export default Square;