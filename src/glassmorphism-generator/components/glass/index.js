import React from 'react';
import styled from 'styled-components';
import Circle from './Circle';

const Component = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 100%;
  margin-bottom: 25px;
  border-radius: 10px;
  background: rgba(${({ color: { r, g, b } }) => `${r}, ${g}, ${b}, `}${({ transparency }) => transparency});
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(${({ blur }) => blur}px);
  
`;
const Text = styled.div`
  padding: 0 20px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #f0f8ff;
  text-shadow: 0 2px 4px rgba(13, 22, 35, 0.3);
`;

const Glass = ({ blur, transparency, color }) => {
  return (
    <Component>
      <Circle size={50} left={'50%'} top={'10%'}/>
      <Circle size={100} left={'20%'} bottom={'20%'}/>
      <Circle size={200} right={'-75px'} bottom={'-25px'}/>
      <Circle after size={150} top={'-75px'} left={'-50px'}/>
      <Wrapper color={color} blur={blur} transparency={transparency}>
        <Text>
          CSS Glassmorphism Generator
        </Text>
      </Wrapper>
    </Component>
  );
};

export default Glass;