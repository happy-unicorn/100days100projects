import { useRef, useEffect } from 'react';
import useEventListener from './useEventListener';
import useElement from './useElement';

export default function useDragAndDrop(mouseUpCallback, axis='both') {
    const [draggable, draggableRef, setDraggable] = useElement();
    const [container, containerRef, setContainer] = useElement();

    const isDragReady = useRef(false);
    const dragOffset = useRef({ x: 0, y: 0 });

    const mouseDownHandler = ({ pageX, pageY }) => {
        isDragReady.current = true;
        dragOffset.current = {
            x: pageX - draggableRef.current.offsetLeft,
            y: pageY - draggableRef.current.offsetTop
        };
    };
    const mouseUpHandler = () => {
        isDragReady.current = false;
        mouseUpCallback && mouseUpCallback();
    };
    const mouseMoveHandler = (event) => {
        if (isDragReady.current) {
            const { width: containerWidth, height: containerHeight } = containerRef.current.getBoundingClientRect();
            const { width: draggableWidth, height: draggableHeight } = draggableRef.current.getBoundingClientRect();
            let offsetX = 0, offsetY = 0;
            if (axis === 'horizontal' || axis === 'both') {
                if (event.pageX - dragOffset.current.x < -draggableWidth / 2) {
                    offsetX = -draggableWidth / 2;
                } else if (event.pageX - dragOffset.current.x + draggableWidth > containerWidth + draggableWidth / 2) {
                    offsetX = containerWidth - draggableWidth / 2;
                } else {
                    offsetX = event.pageX - dragOffset.current.x;
                }
            }
            if (axis === 'vertical' || axis === 'both') {
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
        }
    };

    useEventListener('mousedown', mouseDownHandler, draggable);
    useEventListener('mouseup', mouseUpHandler, container);
    useEventListener('mousemove', mouseMoveHandler, container);

    return [setDraggable, setContainer];
}