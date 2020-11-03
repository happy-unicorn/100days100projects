import React, {useCallback, useEffect, useRef} from 'react';
import styled, { keyframes } from 'styled-components';
import snowflake from '../images/snowflake.png';

const snowflakeKeyframes = keyframes`
  0% {
    top: -5%;
  }
  100% {
    top: 105%;
  }
`;
const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  
  & div {
    position: absolute;
    top: -5vh;
    background-image: url(${snowflake});
    background-size: 100%;
    background-repeat: no-repeat;
    animation: ${snowflakeKeyframes} linear forwards;
  }
`;
const Snow = () => {
    const container = useRef(null);

    const createSnowflake = useCallback(() => {
        const snowflake = document.createElement('div');
        const { width } = container.current.getBoundingClientRect();

        const size = Math.random() * 30 + 30 + 'px';
        snowflake.style.width = size;
        snowflake.style.height = size;

        snowflake.style.left = Math.random() * width + 'px';
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
        snowflake.style.opacity = Math.random();

        container.current.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 10000);
    }, [container]);

    useEffect(() => {
        const spammer = setInterval(createSnowflake, 10);
        return () => {
            clearInterval(spammer);
        };
    }, []);

    return (
        <Container ref={container}/>
    );
};

export default Snow;