import React, {useCallback, useMemo, useState} from 'react';
import styled from 'styled-components';
import Slider from '../components/slider';
import Glass from '../components/glass';
import Output from '../components/Output';
import Picker from '../components/Picker';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 350px;
  max-width: 500px;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 150px;
  border-radius: 10px;
  background-color: aliceblue;
  z-index: 2;
`;
const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  width: 35%;
  padding: 10px;
`;
const OutputWrapper = styled.div`
  height: 90%;
  width: 65%;
  margin-right: 10px;
`;

const Generator = () => {
  const [blur, setBlur] = useState(5.0);
  const [transparency, setTransparency] = useState(0.25);
  const [color, setColor] = useState({
    r: 255,
    g: 255,
    b: 255,
    a: 1
  });

  const onBlurChange = useCallback((value) => {
    setBlur(value.toFixed(1));
  }, []);
  const onTransparencyChange = useCallback((value) => {
    setTransparency(value.toFixed(2));
  }, []);
  const onColorChange = useCallback(({ rgb }) => {
    setColor(rgb);
  }, []);

  const code = useMemo(() => {
    return `background: rgba(${color.r}, ${color.g}, ${color.b}, ${transparency});\nbox-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\nbackdrop-filter: blur(${blur}px);`;
  }, [blur, transparency, color]);

  return (
    <Container>
      <Glass color={color} blur={blur} transparency={transparency}/>
      <Menu>
        <SliderWrapper>
          <Slider text={'Blur'} value={blur} max={20} step={0.5} defaultValue={5.0} onChange={onBlurChange}/>
          <Slider text={'Transparency'} value={transparency} defaultValue={0.25} onChange={onTransparencyChange}/>
          <Picker onColorChange={onColorChange} color={color}/>
        </SliderWrapper>
        <OutputWrapper>
          <Output code={code}/>
        </OutputWrapper>
      </Menu>
    </Container>
  );
};

export default Generator;