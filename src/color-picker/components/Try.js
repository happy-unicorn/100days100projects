import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const Component = styled.canvas`
  border: 8px solid #1d1f21;
  box-shadow: 5px 5px 8px #111213, -5px -5px 8px #292c2f;
`;

const Bar = () => {
    const a = useRef(null);
    useEffect(() => {
        const context = a.current.getContext('2d');

        var my_gradient3=context.createLinearGradient(0,0, 0, 250);
        my_gradient3.addColorStop(1,'rgba(255, 255, 255, 0)');
        my_gradient3.addColorStop(0,"rgba(255, 255, 255, 0)");
        context.fillStyle = my_gradient3;
        context.fillRect(0, 0, 250, 250);
        var my_gradient2=context.createLinearGradient(0,0, 0, 250);
        my_gradient2.addColorStop(1,'rgba(0, 0, 0, 0.5)');
        my_gradient2.addColorStop(0.4,'rgba(0, 0, 0, 0.5)');
        my_gradient2.addColorStop(0,"rgba(255, 255, 255, 0.5)");
        context.fillStyle = my_gradient2;
        context.fillRect(0, 0, 250, 250);


        var my_gradient=context.createLinearGradient(0,0, 250, 0);
        my_gradient.addColorStop(1,'rgba(255, 255, 255, 0.5)');
        my_gradient.addColorStop(0.3,"rgba(255, 0, 0, 0.5)");
        my_gradient.addColorStop(0,"rgba(255, 0, 0, 0.5)");
        context.fillStyle = my_gradient;
        context.fillRect(0, 0, 250, 250);
        a.current.onclick = function(mouseEvent){
                const canvasContext = a.current.getContext('2d');
              var imgData = canvasContext.getImageData(mouseEvent.offsetX, mouseEvent.offsetY, 1, 1);
              var rgba = imgData.data;

              console.log("rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")");
            }
    }, []);

    return (
        <Component ref={a} width='250px' height='250px'/>
    );
};

export default Bar;