import React, { useMemo, useState, useCallback } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import converter from 'color-convert';
import Slider from '../components/slider';
import Output from '../components/Output';
import Neumorphism from '../components/Neumorphism';
import Picker from '../components/Picker';
import { getShadowDirection } from '../utils/getShadowDirection';
import { LIGHT_COLOR as light, DARK_COLOR as dark } from '../styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 100%;
  padding: 50px 0;
  background: #${({ theme: { backgroundColor } }) => backgroundColor};
`;
const Menu = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  width: 80%;
  min-width: 300px;
  max-width: 500px;
  padding: 25px;
  margin-top: 55px;
  border-radius: 25px;
  background: #${({ theme: { backgroundColor } }) => backgroundColor};
  ${({ theme: { boxShadow } }) => boxShadow}
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
    size: 250,
    radius: 50,
    distance: 20,
    intensity: 0.15,
    blur: 60
  });
  const [color, setColor] = useState({
    r: 127,
    g: 127,
    b: 127,
    a: 1
  });
  const [direction, setDirection] = useState('TL');

  const onParamsChange = useCallback((key) => (value) => {
    setParams(prevState => {
      return {...prevState, [key]: value};
    });
  }, []);
  const onDirectionClick = useCallback((direction) => () => {
    setDirection(direction);
  }, []);
  const onColorChange = useCallback(({ rgb }) => {
    setColor(rgb);
  }, []);

  const [theme, code] = useMemo(() => {
    const { r, g, b } = color;
    const { size, radius, distance, intensity, blur } = params;
    const colorHEX = converter.rgb.hex([r, g, b]).toLowerCase();
    const colorHSV = converter.rgb.hsv([r, g, b]);
    const delta = Math.floor(intensity * 50);
    let topColor = Math.min(100, colorHSV[2] + delta);
    topColor = converter.hsv.hex([...colorHSV.slice(0, 2), topColor]).toLowerCase();
    let bottomColor = Math.max(0, colorHSV[2] - delta);
    bottomColor = converter.hsv.hex([...colorHSV.slice(0, 2), bottomColor]).toLowerCase();
    const boxShadow = getShadowDirection(direction, distance, blur, topColor, bottomColor);
    const theme = {
      size,
      radius,
      backgroundColor: colorHEX,
      boxShadow,
      UIColor: colorHSV[2] > 50 ? dark : light,
      UIColorReverse: colorHSV[2] > 50 ? light : dark
    };
    const code = `border-radius: ${radius}px;\nbackground-color: #${colorHEX};\n${boxShadow}`;
    return [theme, code];
  }, [params, direction, color]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Neumorphism
          direction={direction}
          onClick={onDirectionClick}
        />
        <Menu>
          <Picker color={color} onColorChange={onColorChange}/>
          <Sliders>
            <Slider
              min={10}
              max={300}
              step={1}
              text={'Size'}
              value={params.size}
              onChange={onParamsChange('size')}
            />
            <Slider
              min={0}
              max={150}
              step={1}
              text={'Radius'}
              value={params.radius}
              onChange={onParamsChange('radius')}
            />
            <Slider
              min={5}
              max={50}
              step={1}
              text={'Distance'}
              value={params.distance}
              onChange={onParamsChange('distance')}
            />
            <Slider
              min={0.05}
              max={0.6}
              step={0.01}
              text={'Delta'}
              value={params.intensity}
              onChange={onParamsChange('intensity')}
            />
            <Slider
              min={0}
              max={100}
              step={1}
              text={'Blur'}
              value={params.blur}
              onChange={onParamsChange('blur')}
            />
          </Sliders>
          <Wrapper>
            <Output code={code}/>
          </Wrapper>
        </Menu>
      </Container>
    </ThemeProvider>
  );
};

export default Generator;