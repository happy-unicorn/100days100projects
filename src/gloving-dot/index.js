import React, { useEffect, useState} from 'react';
import styled, { keyframes } from 'styled-components';
import { debounce } from './utils/debounce';

const changeColor = keyframes`
  0% {
    filter: hue-rotate(0deg);    
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

const Page = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  animation: ${changeColor} 5s linear infinite;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Dot = styled.span`
  display: block;
  position: relative;
  height: 30px;
  width: 30px;
  
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #00ff0a;
    box-shadow: 0 0 10px #00ff0a, 0 0 20px #00ff0a, 0 0 40px #00ff0a, 0 0 60px #00ff0a, 0 0 80px #00ff0a, 0 0 100px #00ff0a;
    pointer-events: none;
    transform: scale(${({ $mode }) => $mode ? 0.1 : 0});
    transition: ${({ duration }) => duration ? 2 : 10}s;
  }
  &:hover::before {
    transform: scale(1);
    transition: 0s;
  }
`;

const GlovingPage = () => {
    const [numberDots, setNumberDots] = useState({
        h: Math.floor(window.innerHeight / 30),
        w: Math.floor(window.innerWidth / 30)
    });
    const [mode, setMode] = useState(true);
    const [duration, setDuration] = useState(true);

    useEffect(() => {
        const debouncedOnResize = debounce(() => {
            setNumberDots({
                h: Math.floor(window.innerHeight / 30),
                w: Math.floor(window.innerWidth / 30)
            });
        }, 10);
        const onPress = ({ keyCode }) => {
            if (keyCode === 113) {
                setMode(prevMode => !prevMode);
            }
            if (keyCode === 119) {
                setDuration(prevDuration => !prevDuration);
            }
            console.log(keyCode);
        };

        window.addEventListener('resize', debouncedOnResize, false);
        window.addEventListener('keypress', onPress, false);
        return () => {
            window.removeEventListener('resize', debouncedOnResize, false);
            window.removeEventListener('keypress', onPress, false);
        };
    });

    return (
        <Page>
            {[...Array(numberDots.h)].map((_, i) =>
                <Row key={i}>
                    {[...Array(numberDots.w)].map((_, j) =>
                        <Dot duration={duration} $mode={mode} key={j}/>
                    )}
                </Row>
            )}
        </Page>
    );
};

export default GlovingPage;