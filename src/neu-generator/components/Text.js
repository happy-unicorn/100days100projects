import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px 0 15px;
  font-size: 13px;
  color: ${({ theme: { UIColor } }) => UIColor};
`;
const Label = styled.span``;
const Value = styled(Label)`
  font-weight: bold;
`;

const Text = ({ text, value }) => {
  return (
    <Component>
      <Label>
        {text}
      </Label>
      <Value>
        {value}
      </Value>
    </Component>
  );
};

export default Text;