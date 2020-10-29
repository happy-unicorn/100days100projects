import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Circle from './Circle';
import useDragAndDrop from '../hooks/useDragAndDrop';
import useElement from '../hooks/useElement';
import Rectangle from './Rectangle';

function quadGradient(canvas, corners) {
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
    var gradient, startColor, endColor, fac;

    for(var i = 0; i < h; i++) {
        gradient = ctx.createLinearGradient(0, i, w, i);
        fac = i / (h - 1);

        startColor = arrayToRGBA(
          lerp(corners.topLeft, corners.bottomLeft, fac)
        );
        endColor = arrayToRGBA(
          lerp(corners.topRight, corners.bottomRight, fac)
        );

        gradient.addColorStop(0, startColor);
        gradient.addColorStop(1, endColor);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, i, w, i);
    }
}

function arrayToRGBA(arr) {
    var ret = arr.map(function(v) {
        // map to [0, 255] and clamp
        return Math.max(Math.min(Math.round(v * 255), 255), 0);
    });

    // alpha should retain its value
    ret[3] = arr[3];

    return 'rgba(' + ret.join(',') + ')';
}

function lerp(a, b, fac) {
    return a.map(function(v, i) {
        return v * (1 - fac) + b[i] * fac;
    });
}

const Component = styled.div`
  position: relative;
  overflow: hidden;
`;
const Canvas = styled.canvas``;

//     //only for this demo
//     this.initPosition = function () {
//         el.style.position = "absolute";
//         el.style.top = "0";
//         el.style.left = "30px";
//     };

const Square = () => {
    const [setCircle, setContainer]= useDragAndDrop();
    const a =  useRef(null);
    useEffect(() => {
        const context = a.current.getContext('2d');
        quadGradient(a.current, {
          topLeft: [1, 0, 0, 1],
          topRight: [1, 1, 1, 1],
          bottomLeft: [0, 0, 0, 1],
          bottomRight: [0, 0, 0, 1]
        });
        a.current.onclick = function(mouseEvent){
                const canvasContext = a.current.getContext('2d');
              var imgData = canvasContext.getImageData(mouseEvent.offsetX, mouseEvent.offsetY, 1, 1);
              var rgba = imgData.data;

              console.log("rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")");
            }
    }, []);

    return (
        <Component ref={element => setContainer(element)}>
            <Canvas ref={a} width='250px' height='250px'/>
            <Circle reference={element => setCircle(element)}/>
        </Component>
    );
};

export default Square;