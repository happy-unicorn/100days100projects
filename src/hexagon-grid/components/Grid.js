import React from 'react';
import styled from 'styled-components';
import Hexagon from './Hexagon';

const Component = styled.ul`
  --amount: 5;
  display: grid;
  grid-template-columns: repeat(var(--amount), 1fr, 2fr) 1fr;
  grid-gap: 2.5rem 5rem;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  
  & * {
    box-sizing: border-box;
  }
  
  @media screen and (min-width: 1440px) {
    --amount: 5;
    --counter: 1;
  }
  @media screen and (min-width: 1120px) and (max-width: 1439px) {
    --amount: 4;
    --counter: 1;  
  }
  @media screen and (min-width: 840px) and (max-width: 1119px) {
    --amount: 3;
    --counter: 1;
  }
  @media screen and (min-width: 480px) and (max-width: 839px) {
    --amount: 2;
    --counter: 1;
  }
  @media screen and (max-width: 479px) {
    --amount: 1;
  }
`;

const Grid = ({ data }) => (
  <Component>
    {data.map(({ text }, i) =>
      <Hexagon text={text} key={i}/>
    )}
  </Component>
);

export default Grid;