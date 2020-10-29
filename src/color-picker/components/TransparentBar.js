import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import colorWheel from '../images/colorWheel.png';

const Component = styled.div`
  background-color: #fff;
  background-image: 
    linear-gradient(45deg, #bbb 25%, transparent 25%, transparent 75%, #bbb 75%, #bbb), 
    linear-gradient(45deg, #bbb 25%, transparent 25%, transparent 75%, #bbb 75%, #bbb);
  background-size: 10px 10px;
  background-position:0 0, 5px 5px;
`;
const Canvas = styled.canvas`
`;

const TransparentBar = () => {
    const a = useRef(null);
    useEffect(() => {
        const context = a.current.getContext('2d');
        var my_gradient=context.createLinearGradient(0,0, 250, 25);
        my_gradient.addColorStop(0,"rgba(255, 0, 0, 0)");
        my_gradient.addColorStop(1,"rgba(255, 0, 0, 1)");
        context.fillStyle = my_gradient;
        context.fillRect(0, 0, 250, 25);
        a.current.onclick = function(mouseEvent){
                const canvasContext = a.current.getContext('2d');
              var imgData = canvasContext.getImageData(mouseEvent.offsetX, mouseEvent.offsetY, 1, 1);
              var rgba = imgData.data;

              console.log("rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")");
            }
    }, [a]);

    return (
        <Component>
            <Canvas ref={a} width='250px' height='25px'/>
        </Component>
    );
};

export default TransparentBar;