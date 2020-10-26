import React from 'react';
import styled from 'styled-components';

const Component = styled.button`
  width: 100px;
  background-color: ${({ disabled }) => !disabled ? 'green' : 'red'};
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