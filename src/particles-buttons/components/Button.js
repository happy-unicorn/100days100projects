import React, { useCallback, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const A = createGlobalStyle`
  particle {
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
  }
`;
const a = styled.div`
  background-color: red;
`;
const Component = styled.button`
  height: 50px;
  width: 150px;
`;

const Button = ({ children }) => {
    const button = useRef(null);

    const createParticle = useCallback((x, y) => {
  const particle = document.createElement('particle');
  document.body.appendChild(particle);

  // Calculate a random size from 5px to 25px
  const size = Math.floor(Math.random() * 20 + 5);
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.backgroundImage = `url(https://img.icons8.com/cotton/344/jack-o-lantern.png)`;
  particle.style.backgroundSize = `100%`;
  // Generate a random x & y destination within a distance of 75px from the mouse
  const destinationX = x + (Math.random() - 0.5) * 2 * 75;
  const destinationY = y + (Math.random() - 0.5) * 2 * 75;
  let rotation = Math.random() * 520;


  // Store the animation in a variable as we will need it later
  const animation = particle.animate([
    {
      // Set the origin position of the particle
      // We offset the particle with half its size to center it around the mouse
      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)  rotate(0deg)`,
      opacity: 1
    },
    {
      // We define the final coordinates as the second keyframe
      transform: `translate(${destinationX}px, ${destinationY}px) rotate(${rotation}deg)`,
      opacity: 0
    }
  ], {
    // Set a random duration from 500 to 1500ms
    duration: Math.random() * 1000 + 500,
    easing: 'cubic-bezier(0, .9, .57, 1)',
    // Delay every particle with a random value of 200ms
    delay: Math.random() * 200
  });

  // When the animation is complete, remove the element from the DOM
  animation.onfinish = () => {
    particle.remove();
  };
}, []);

    const onClickHandler = useCallback((e) => {
        for (let i = 0; i < 200; i++) {
            createParticle(e.clientX, e.clientY);
        }
    }, []);

    return (
        <Component ref={button} onClick={onClickHandler}>
            <A/>
            {children}
        </Component>
    );
};

export default Button;