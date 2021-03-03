import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 80%;
  min-width: 300px;
  max-width: 500px;
  
  &:after {
    content: "";
    padding-bottom: 100%;
  }
`;
const Target = styled.div`
  height: 400px;
  width: 400px;
  background: #922a2a;
  border-radius: 154px;
  box-shadow: 33px 33px 22px #7c2424, -33px -33px 22px #a83030;
`;
const Corner = styled.div`
  box-sizing: border-box;
  position: absolute;
  height: 35px;
  width: 35px;
  border: 3px solid green;
`;
const CornerTL = styled(Corner)`
  top: 0;
  left: 0;
  border-radius: 5px 0 35px 0;
`;
const CornerTR = styled(Corner)`
  top: 0;
  right: 0;
  border-radius: 0 5px 0 35px;
`;
const CornerBR = styled(Corner)`
  bottom: 0;
  right: 0;
  border-radius: 35px 0 5px 0;
`;
const CornerBL = styled(Corner)`
  bottom: 0;
  left: 0;
  border-radius: 0 35px 0 5px;
`;

const Neumorphism = ({ onClick }) => {
  return (
    <Component>
      <CornerTL/>
      <CornerTR/>
      <CornerBR/>
      <CornerBL/>
      <Target/>
    </Component>
  );
};

export default Neumorphism;