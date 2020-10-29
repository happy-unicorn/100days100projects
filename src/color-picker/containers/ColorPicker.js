import React, {useState} from 'react';
import styled from 'styled-components';
import TransparentBar from '../components/TransparentBar';
import ColorSquare from '../components/ColorSquare';
import ColorBar from '../components/ColorBar';
import ColorCurrent from '../components/ColorCurrent';

const Container = styled.div`
  display: grid;
  grid-template-rows: 250px 10px 25px;
  grid-template-columns: 250px 10px 25px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 5px 5px 8px #111213, -5px -5px 8px #292c2f;

  & > div:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  & > div:nth-child(2) {
    grid-area: 1 / 3 / 2 / 4;
  }
  & > div:nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
  }
  & > div:nth-child(4) {
    grid-area: 3 / 3 / 4 / 4;
  }
`;

const ColorPicker = () => {
    const [color, setColor] = useState({
        r: 255,
        g: 0,
        b: 0,
        a: 0.7
    });

    const mergeColor = (newColor) => {
        setColor((prevColor) => {
            return {
                ...prevColor,
                ...newColor
            }
        });
    };

    return (
        <Container>
            <ColorSquare/>
            <ColorBar/>
            <TransparentBar mergeColor={mergeColor} color={color}/>
            <ColorCurrent color={color}/>
        </Container>
    );
};

export default ColorPicker;