import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #1d1f21;
  background-color: green;
`;

const Circle = () => {
    return (
        <Component/>
    );
};

export default Circle;