import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  border: 3px solid #1d1f21;
  border-radius: 50%;
`;

const Circle = ({ reference }) => {
    return (
        <Component ref={reference}/>
    );
};

export default Circle;