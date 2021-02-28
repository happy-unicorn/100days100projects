import React, { useEffect, useState} from 'react';
import styled, { css } from 'styled-components';

const Page = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
const Row = styled.div`
  display: flex;
  margin-top: -${({ radius }) => 1 / Math.sqrt(3) * radius}px;
  margin-left: -${({ radius }) => radius * 2 + 2}px;
  
  &:nth-child(even) {
    margin-left: 2px;
  }
`;
const Hexagon = styled.div`
  position: relative;
  min-height: ${({ radius }) => 4 / Math.sqrt(3) * radius}px;
  min-width: ${({ radius }) => 2 * radius}px;
  margin: 2px; 
  background-color: transparent;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: 3s;
  
  &:hover {
    background-color: #fef2cc;
    transition: 0s;
  }
  
  ${({ $mode }) => $mode && css`
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      min-height: ${({ radius }) => 4 / Math.sqrt(3) * radius - 10}px;
      min-width: ${({ radius }) => 2 * radius - 10}px;
      background-color: #1d1f21;
      transform: translate(-50%, -50%);
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    }
  `}
`;

const GlovingHexagonPage = () => {
    const [radius] = useState(30);
    const [numberHexagons, setNumberHexagons] = useState({
        h: Math.floor(window.innerHeight / (3 / (2 * Math.sqrt(3)) * 2 * radius)) + 2,
        w: Math.floor(window.innerWidth / (2 * radius)) + 2
    });
    const [mode, setMode] = useState(false);

    useEffect(() => {
        const debouncedOnResize = () => {
            setNumberHexagons({
                h: Math.floor(window.innerHeight / (3 / (2 * Math.sqrt(3)) * 2 * radius)) + 2,
                w: Math.floor(window.innerWidth / (2 * radius)) + 2
            });
        };
        const onPress = ({ keyCode }) => {
            if (keyCode === 113) {
                setMode(prevMode => !prevMode);
            }
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
            {[...Array(numberHexagons.h)].map((_, i) =>
                <Row radius={radius} key={i}>
                    {[...Array(numberHexagons.w)].map((_, j) =>
                        <Hexagon $mode={mode} radius={radius} key={j}/>
                    )}
                </Row>
            )}
        </Page>
    );
};

export default GlovingHexagonPage;