import styled from 'styled-components';
import React from 'react';

const Component = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #213a5a;
  outline: none;
  cursor: grab;
`;

const Thumb = (props) => (
  <Component {...props}/>
);

export default Thumb;