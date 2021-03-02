import React from 'react';
import styled from 'styled-components';

const Component = styled.span`
  position: absolute;
  ${({ top }) => `top: ${top};`};
  ${({ right }) => `right: ${right};`};
  ${({ bottom }) => `bottom: ${bottom};`};
  ${({ left }) => `left: ${left};`};
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: 50%;
  background: radial-gradient(circle at 20% 20%, #b1d3f3, #213a5a);
  z-index: ${({ after }) => after ? 1 : 0};
`;

const Circle = (props) => {
  return (
    <Component {...props}/>
  );
};

export default Circle;