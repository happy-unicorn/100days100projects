import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const Component = styled.div``;
const Canvas = styled.canvas``;

const ColorBar = () => {
    const a = useRef(null);
    useEffect(() => {
        const context = a.current.getContext('2d');
        var my_gradient=context.createLinearGradient(0,0, 25, 250);
        my_gradient.addColorStop(0,"white");
        my_gradient.addColorStop(1,"black");
        context.fillStyle = my_gradient;
        context.fillRect(0, 0, 25, 250);
        a.current.onclick = function(mouseEvent){
                const canvasContext = a.current.getContext('2d');
              var imgData = canvasContext.getImageData(mouseEvent.offsetX, mouseEvent.offsetY, 1, 1);
              var rgba = imgData.data;

              console.log("rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")");
            }
    }, []);

    return (
        <Component>
            <Canvas ref={a} width='25px' height='250px'/>
        </Component>
    );
};

export default ColorBar;