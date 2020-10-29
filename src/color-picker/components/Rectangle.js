import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: ${({ rot }) => rot ? 10 : 25}px;
  height: ${({ rot }) => rot ? 25 : 10}px;
  border: 3px solid #1d1f21;
  border-radius: 5px;
`;

const Rectangle = ({ reference, rot = false }) => {
    return (
        <Component ref={reference} rot={rot}/>
    );
};

export default Rectangle;