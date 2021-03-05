import React from 'react';
import styled from 'styled-components';

const Component = styled.pre`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 10px;
  margin-right: 10px;
  border-radius: 3px;
  background-color: ${({ theme: { color } }) => color};
  font-size: 12px;
  color: ${({ theme: { icolor } }) => icolor};
  white-space: pre-wrap;
  word-wrap: break-word;
  letter-spacing: 0;
  line-height: 18px;
`;

const Output = ({ code }) => {
  return (
    <Component>
      {code}
    </Component>
  );
};

export default Output;