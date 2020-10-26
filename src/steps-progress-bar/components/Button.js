import React from 'react';
import styled from 'styled-components';

const Component = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 25px;
  outline: none;
  background: linear-gradient(145deg, #1f2123, #1a1c1e);
  box-shadow: 5px 5px 8px #111213, -5px -5px 8px #292c2f;
  font-size: 15px;
  color: ${({ disabled }) => disabled ?  '#666666': '#c9c9cb'};
  
  &:hover {
    background: linear-gradient(145deg, #1a1c1e, #1f2123);
  }
`;

const Button = ({ label, isActive, onClick }) => {
    return (
        <Component
            disabled={!isActive}
            onClick={onClick}
        >
            {label}
        </Component>
    );
};

export default Button;