import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const hexagonHover = keyframes`
  10% {
    stroke-dasharray: 0, 20, 300;
  }
  100% {
    stroke-dasharray: 300, 20, 300;
  }
`;
const Component = styled.div`
  position: absolute;
  top: 45%; 
  left: 45%;
  height: 10%;
  width: 10%;
  cursor: pointer;
  z-index: 2;
  will-change: transform;
  
  & svg {
    display: block;
  }
  &:hover svg polygon {
    ${({ isOpen }) => isOpen ? css`
      animation: none;
    `: css`
      animation: ${hexagonHover} 0.5s;
    `};
  }
  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 2px;
    width: 20px;
    padding: 8px 0;
    background-clip: content-box;
    background-color: ${({ isOpen }) => isOpen ? 'transparent' : '#585247'};
    transform: translate(-50%, -50%);
    transition: background-color 0.5s;
  }
  & span:before, & span:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 20px;
    background-color: #585247;
    transition: transform 0.5s;
  }
  & span:before {
    top: 0;
    
    ${({ isOpen }) => isOpen && css`
      transform: translateY(8px) rotate(45deg);
    `}
  }
  & span:after {
    bottom: 0;
    
    ${({ isOpen }) => isOpen && css`
      transform: translateY(-8px) rotate(-45deg);
    `}
  }
`;

const Button = ({ isOpen, onClick }) => {
  return (
    <Component isOpen={isOpen} onClick={onClick}>
      <svg viewBox='0 0 100 100'>
        <polygon points='50 2 7 26 7 74 50 98 93 74 93 26' fill='transparent' strokeWidth='4' stroke='#585247'/>
      </svg>
      <span/>
    </Component>
  );
};

export default Button;