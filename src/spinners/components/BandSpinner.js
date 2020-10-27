import React from 'react';
import styled, { keyframes } from 'styled-components';

const pieceTransformKeyframe = ({ numberOfElements}) => keyframes`
  0% {
    transform: translateX(0);
  }
  100%{
    transform: translateX(-${numberOfElements * 30}px);
  }
`;
const Component = styled.div`
  box-sizing: border-box;
  width: 150px;
  height: 40px;
  border: 8px solid #1d1f21;
  border-radius: 20px;
  box-shadow: 5px 5px 8px #111213, -5px -5px 8px #292c2f;
  white-space: nowrap;
  overflow: hidden;
`;
const Piece = styled.span`
  display: inline-block;
  height: 40px;
  width: 30px;
  background-color: ${({ color }) => color};
  animation: ${pieceTransformKeyframe} ${({ numberOfElements }) => numberOfElements / 6}s linear infinite;
`;

const BandSpinner = ({ colors=['#d267b7', '#bf0092', '#9a0073', '#7f005d', '#9a0073', '#bf0092'] }) => {
    const pieces = [...colors, ...colors].map((color, index) => {
        return <Piece
            numberOfElements={colors.length}
            color={color}
            key={index}
        />
    });

    return (
        <Component>
            {pieces}
        </Component>
    );
};

export default BandSpinner;