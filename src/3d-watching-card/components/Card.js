import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import useEventListener from '../hooks/useEventListener';

const Component = styled.div`
  transform-style: preserve-3d;
`;
const Wrapper = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 50px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0 0 50px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
`;

const Card = () => {
    const [{ xAxis, yAxis }, setAxises] = useState({
        xAxis: 0,
        yAxis: 0
    });
    const [component, setComponent] = useState(null);

    const mouseMoveHandler = useCallback(({ target, clientX: xAxis, clientY: yAxis }) => {
        const { top: topIndent, left: leftIndent, width, height } = target.getBoundingClientRect();
        setAxises({
            xAxis: ((xAxis - leftIndent) - width / 2) / 10,
            yAxis: -((yAxis - topIndent) - height / 2) / 10
        });
    }, [setAxises]);
    const mouseEnterHandler = (() => {

    });
    const mouseLeaveHandler = (() => {
        setAxises({
            xAxis: 0,
            yAxis: 0
        });
    });

    useEventListener('mousemove', mouseMoveHandler, component);
    useEventListener('mouseleave', mouseLeaveHandler, component);

    return (
        <Component ref={element => setComponent(element)}>
            <Wrapper style={{transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`}}>
            </Wrapper>
        </Component>
    );
};

export default Card;