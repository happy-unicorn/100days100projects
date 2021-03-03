import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  top: 6px;
  height: 8px;
  margin: 0 4px;
  border-radius: 4px;
  background: #213a5a;
`;

const Track = (props, { index }) => {
  return (
    <Component {...props} index={index}/>
  );
};

export default Track;