import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import Slider from '../components/slider';
import Output from '../components/Output';
import Neumorphism from '../components/Neumorphism';
import Picker from '../components/Picker';

const LIGHT_COLOR = '#f0f8ff';
const DARK_COLOR = '#1d1f21';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
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
  height: 100px;
`;

const Generator = () => {
  const [size, setSize] = useState(5.0);
  const [radius, setRadius] = useState(5.0);
  const [distance, setDistance] = useState(5.0);
  const [intensity, setIntensity] = useState(5.0);
  const [blur, setBlur] = useState(5.0);
  const [color, setColor] = useState();

  const code = useMemo(() => {
    return `ggvgvgvvgvgnjnjnjnjnj`;
  }, [size, radius, distance, intensity, blur]);

  return (
    <Container>
      <Neumorphism/>
      <Menu>
        <Sliders>
          <Slider text={'Size'} value={size}/>
          <Slider text={'Radius'} value={radius}/>
          <Slider text={'Distance'} value={distance}/>
          <Slider text={'Intensity'} value={intensity}/>
          <Slider text={'Blur'} value={blur}/>
        </Sliders>
        <Wrapper>
          <Output code={code}/>
        </Wrapper>
      </Menu>
    </Container>
  );
};

export default Generator;