import { useRef, useEffect } from 'react';
import useEventListener from './useEventListener';
import useElement from './useElement';

export default function useDragAndDrop(mouseUpCallback, axis='both', defaultStyles=null) {
    const [draggable, draggableRef, setDraggable] = useElement();
    const [_, containerRef, setContainer] = useElement();

    const isDragReady = useRef(false);
    const dragOffset = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (draggable && defaultStyles) {
            const { width: containerWidth, height: containerHeight } = containerRef.current.getBoundingClientRect();
            const { width: draggableWidth, height: draggableHeight } = draggableRef.current.getBoundingClientRect();
            if (axis === 'horizontal') {
                draggableRef.current.style.top = containerHeight * 0.5 - draggableHeight * 0.5 + 'px';
                draggableRef.current.style.left = containerWidth * defaultStyles.leftRatio - draggableWidth * 0.5 + 'px';
            } else if (axis === 'vertical') {
                draggableRef.current.style.top = containerHeight * defaultStyles.topRatio - draggableHeight * 0.5 + 'px';
                draggableRef.current.style.left = containerWidth * 0.5 - draggableWidth * 0.5 + 'px';
            }
        }
    }, [draggable]);

    const mouseDownHandler = ({ pageX, pageY }) => {
        isDragReady.current = true;
        dragOffset.current = {
            x: pageX - draggableRef.current.offsetLeft,
            y: pageY - draggableRef.current.offsetTop
        };
    };
    const mouseEndHandler = () => {
        isDragReady.current = false;
    };
    const mouseMoveHandler = (event) => {
        if (isDragReady.current) {
            const { width: containerWidth, height: containerHeight } = containerRef.current.getBoundingClientRect();
            const { width: draggableWidth, height: draggableHeight } = draggableRef.current.getBoundingClientRect();
            let offsetX = containerWidth * 0.5 - draggableWidth * 0.5, offsetY = containerHeight * 0.5 - draggableHeight * 0.5;
            if (axis === 'horizontal') {
                if (event.pageX - dragOffset.current.x < -draggableWidth / 2) {
                    offsetX = -draggableWidth / 2;
                } else if (event.pageX - dragOffset.current.x + draggableWidth > containerWidth + draggableWidth / 2) {
                    offsetX = containerWidth - draggableWidth / 2;
                } else {
                    offsetX = event.pageX - dragOffset.current.x;
                }
            }
            if (axis === 'vertical') {
                if (event.pageY - dragOffset.current.y < -draggableHeight / 2) {
                    offsetY = -draggableHeight / 2;
                } else if (event.pageY - dragOffset.current.y + draggableHeight > containerHeight + draggableHeight / 2) {
                    offsetY = containerHeight - draggableHeight / 2;
                } else {
                    offsetY = event.pageY - dragOffset.current.y;
                }
            }

            draggableRef.current.style.top = offsetY + "px";
            draggableRef.current.style.left = offsetX + "px";

            if (mouseUpCallback) {
                const formattedOffsetX = offsetX + (draggableWidth) / 2;
                const formattedOffsetY = offsetY + (draggableHeight) / 2;
                mouseUpCallback({
                    offsetX: formattedOffsetX,
                    offsetY: formattedOffsetY,
                    xAxisRatio: (offsetX + draggableWidth / 2) / containerWidth,
                    yAxisRatio: (offsetY + draggableHeight / 2) / containerHeight
                });
            }
        }
    };

    useEventListener('mousedown', mouseDownHandler, draggable);
    useEventListener('mouseup', mouseEndHandler, document);
    useEventListener('mousemove', mouseMoveHandler, document);

    return [setDraggable, setContainer];
}