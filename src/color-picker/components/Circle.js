import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  box-sizing: border-box;
  width: 15px;
  height: 15px;
  border: 3px solid #1d1f21;
  border-radius: 50%;background-color: green;
  
`;

const Circle = ({ test }) => {
    return (
        <Component ref={test}/>
    );
};

export default Circle;