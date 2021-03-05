import React, { useMemo, useState, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Slider from '../components/slider';
import Output from '../components/Output';
import Neumorphism from '../components/Neumorphism';
import Picker from '../components/Picker';
import { LIGHT_COLOR as light, DARK_COLOR as dark } from '../styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 100%;
  padding: 50px 0;
  background-color: #922a2a;
`;
const Menu = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
  width: 80%;
  min-width: 300px;
  max-width: 500px;
  padding: 25px;
  margin-top: 25px;
  border-radius: 25px;
  background: #922a2a;
  box-shadow: 33px 33px 22px #7c2424, -33px -33px 22px #a83030;
`;
const Sliders = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100px;
`;

const Generator = () => {
  const [params, setParams] = useState({
    size: 50,
    radius: 25,
    distance: 0,
    intensity: 0,
    blur: 0
  });
  const [color, setColor] = useState({
    r: 255,
    g: 255,
    b: 255,
    a: 1
  });
  const [direction, setDirection] = useState('TL');

  const onParamsChange = useCallback((key) => (value) => {
    setParams(prevState => ({ ...prevState, [key]: value}));
  }, []);
  const onDirectionClick = useCallback((direction) => () => {
    setDirection(direction);
  }, []);
  const onColorChange = useCallback(({ rgb }) => {
    setColor(rgb);
  }, []);

  const code = useMemo(() => {
    const { r, g, b } = color;
    return `border-radius: ${params.radius}px;\nbackground-color: rgb(${r}, ${g}, ${b});\n`;
  }, [params, direction, color]);
  const theme = useMemo(() => {
    const { r, g, b } = color;
    return (r + g + b) / 3 > 127 ? { color: dark, icolor: light }  : { color: light, icolor: dark };
  }, [color])

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Neumorphism
          code={code}
          size={params.size}
          direction={direction}
          onClick={onDirectionClick}
        />
        <Menu>
          <Sliders>
            <Slider
              onChange={onParamsChange('size')}
              text={'Size'}
              value={params.size}
              min={10}
              max={350}
              step={1}
              defaultValue={params.size}
            />
            <Slider
              onChange={onParamsChange('radius')}
              text={'Radius'}
              value={params.radius}
              max={Math.floor(params.size / 2)}
              step={1}
              defaultValue={params.radius}
            />
            <Slider onChange={onParamsChange('distance')} text={'Distance'} value={params.distance}/>
            <Slider onChange={onParamsChange('intensity')} text={'Intensity'} value={params.intensity}/>
            <Slider onChange={onParamsChange('blur')} text={'Blur'} value={params.blur}/>
          </Sliders>
          <Wrapper>
            <Output code={code}/>
            <Picker color={color} onColorChange={onColorChange}/>
          </Wrapper>
        </Menu>
      </ThemeProvider>
    </Container>
  );
};

export default Generator;