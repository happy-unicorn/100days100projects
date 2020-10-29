import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Circle from './Circle';

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

const Square = () => {
    var Draggable = function (ref, a) {

    const at = a.current;
    var el = ref.current,
        isDragReady = false,
        dragoffset = {
            x: 0,
            y: 0
        };
    this.init = function () {
        //only for this demo
        this.initPosition();
        this.events();
    };
    //only for this demo
    this.initPosition = function () {
        el.style.position = "absolute";
        el.style.top = "0";
        el.style.left = "30px";
    };
    //events for the element
    this.events = function () {
        _on(el, 'mousedown', function (e) {
            isDragReady = true;
            dragoffset.x = e.pageX - el.offsetLeft;
            dragoffset.y = e.pageY - el.offsetTop;
        });
        _on(document, 'mouseup', function () {
            isDragReady = false;
        });
        _on(document, 'mousemove', function (e) {
            if (isDragReady) {
                let offsetX, offsetY;
                console.log(e.pageX - dragoffset.x + 15);
                if (e.pageX - dragoffset.x < -7.5  || e.pageX - dragoffset.x + 15 > 30000) {
                    offsetX = -7.5;
                } else if (e.pageX - dragoffset.x + 15 > 257.5) {
                    offsetX = 250 - 7.5;
                } else {
                    offsetX = e.pageX - dragoffset.x;
                }

                // top/bottom constraint
                if (e.pageY - dragoffset.y < -7.5 || e.pageY - dragoffset.y + 15 > 30000) {
                    offsetY = -7.5;
                } else if (e.pageY - dragoffset.y + 15 > 257.5) {
                    offsetY = 250 - 7.5;
                } else {
                    offsetY = e.pageY - dragoffset.y;
                }

                el.style.top = offsetY + "px";
                el.style.left = offsetX + "px";
            }
        });
    };
    //cross browser event Helper function
    var _on = function (el, event, fn) {
        document.attachEvent ? el.attachEvent('on' + event, fn) : el.addEventListener(event, fn, !0);
    };
    this.init();
}

    const ref =  useRef(null);
    const a = useRef(null);
    const b = useRef(null);
    useEffect(() => {
        console.log(a, ref, b);
        if (ref.current) {
            new Draggable(ref, b);
        }
    }, []);
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
        <Component ref={b}>
            <Canvas ref={a} width='250px' height='250px'/>
            <Circle test={ref}/>
        </Component>
    );
};

export default Square;