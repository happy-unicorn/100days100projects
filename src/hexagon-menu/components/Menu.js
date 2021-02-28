import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';

const Component = styled.nav`
  position: relative;
  height: 70vmin;
  width: 70vmin;
  min-height: 500px;
  min-width: 500px;
  margin: 0 auto;
  overflow: hidden;
`;
const List = styled.ul`
  position:absolute;
  top: 0; 
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  transform: scale(0.1) translateZ(0);
  transition: transform 0.05s 0.3s;
  
  ${({ isOpen }) => isOpen && css`
    transform: scale(0.9) translateZ(0);
    transition: none;
    will-change: transform;
  `}
`;
const Item = styled.li`
  position: absolute;
  left: 50%;
  bottom: 50%;
  height: 40%;
  width: 34.6%;
  transform-origin: 0 100%;
  overflow: hidden;
  transform: skewY(-30deg);
  opacity: 0;
  
  ${({ isOpen }) => isOpen && css`
    opacity: 1;
    will-change: transform;
  `}
  
  ${({ isOpen }) => {
    let tmp = '';
    
    for (let i = 0; i < 6; i++) {
      tmp += `
        &:nth-child(${i + 1}) {
          transform: rotate(${60 * i}deg) skewY(${-60 / 2}deg);
          transition:opacity ${0.3}s , transform ${0.3}s;
        }
      `;
      tmp += `
        &:nth-child(${i + 1}) .clip {
          transform: skewY(${60 / 2}deg) rotate(${60 / 2}deg);
        }
      `;
      if (isOpen) {
        tmp += `
          &:nth-child(${i + 1}) {
            transform: rotate(${60 * i}deg) skewY(${-60 / 2}deg) translate(10%, -10%);
            transition: opacity ${0.3}s ${0.3 / 10 + 0.05}s, transform ${0.3}s ${0.3 / 10 + 0.05}s cubic-bezier(0,2.3,0.8,1);
          }
        `;
      }
    }
    
    return css`${tmp}`;
  }}
`;
const Clip = styled.div`
  position:absolute;
  top:0; 
  left:0;
  height: 86.66%;
  width: 116%;
  overflow: hidden;
  transform-origin: 0 0;
`;
const Image = styled.img`
  height: 200px;
  width: 200px;
  
  @media screen and (min-width: 740px) {
    height: 260px;
    width: 260px;
  }
`;

const Menu = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <Component>
      <Button isOpen={isOpen} onClick={openMenu}/>
      <List isOpen={isOpen}>
        {data.map((src, i) => {
          return (
            <Item isOpen={isOpen} key={i}>
              <Clip className='clip'>
                <Image src={src}/>
              </Clip>
            </Item>
          );
        })}
      </List>
    </Component>
  );
};

export default Menu;