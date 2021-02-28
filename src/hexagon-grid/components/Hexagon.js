import React from 'react';
import styled, { css } from 'styled-components';

const getGridItemsMixin = (amount) => {
  let tmp = '';

  for (let i = 1; i <= amount; i++) {
    const gridRow = i % 2 === 0 ?  'grid-row: calc(var(--counter) + var(--counter) - 1) / span 2;': '';
    tmp += `
      &:nth-of-type(${amount}n + ${i}) {
        grid-column: ${2 * i - 1} / span 3;
        ${gridRow}
      }
    `;
  }

  for (let i = 1; i <= 20; i++) {
      tmp += `
        &:nth-of-type(n + ${i * amount + 1}) {
          --counter: ${i + 1};
        }
      `;
    }

  return css`${tmp}`;
};

const Component = styled.li`
  position: relative;
  grid-column: 1 / span 3;
  grid-row: calc(var(--counter) + var(--counter)) / span 2;;
  height: 0;
  padding-bottom: 90%;
 
  @media screen and (min-width: 1440px) {
    ${getGridItemsMixin(5)}
  }
  @media screen and (min-width: 1120px) and (max-width: 1439px) {
    ${getGridItemsMixin(4)}
  }
  @media screen and (min-width: 840px) and (max-width: 1119px) {
    ${getGridItemsMixin(3)}
  }
  @media screen and (min-width: 480px) and (max-width: 839px) {
    ${getGridItemsMixin(2)}
  }
`;
const Content = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 2rem 25%;
  background-color: white;
  clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);
`;

const Hexagon = ({ text }) => (
  <Component>
    <Content>{text}</Content>
  </Component>
);

export default Hexagon;