import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  top: 6px;
  height: 8px;
  margin: 0 4px;
  border-radius: 4px;
  background: ${({ theme: { color } }) => color};
`;

const Track = (props, { index }) => {
  return (
    <Component {...props} index={index}/>
  );
};

export default Track;