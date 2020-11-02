import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';

const Component = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 75px;
  border: none;
  border-radius: 50%;
  background-color: white;
  box-shadow:  8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff;
  outline: none;
`;

const Button = ({
    children,
    quantity = 30,
    particleStyles = {}
}) => {
    const button = useRef(null);

    const createParticle = useCallback((x, y) => {
        const particle = document.createElement('div');

        const size = Math.floor(Math.random() * 15 + 15);
        const destinationX = x + (Math.random() - 0.5) * 2 * 75;
        const destinationY = y + (Math.random() - 0.5) * 2 * 75;
        const rotation = Math.random() * 520;

        particle.style.position = 'fixed';
        particle.style.top = '0';
        particle.style.left = '0';
        particle.style.height = `${size}px`;
        particle.style.width = `${size}px`;
        particle.style.pointerEvents = 'none';
        particle.style.opacity = '0';
        particle.style.backgroundSize = '100%';
        for (let property in particleStyles) {
            if(particle.style.hasOwnProperty(property)) {
                particle.style[property] = typeof particleStyles[property] === 'function'
                    ? particleStyles[property]()
                    : particleStyles[property];
            }
        }

        const animation = particle.animate([{
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)  rotate(0deg)`,
            opacity: 1
        }, {
            transform: `translate(${destinationX}px, ${destinationY}px) rotate(${rotation}deg)`,
            opacity: 0
        }], {
            duration: Math.random() * 1000 + 500,
            easing: 'cubic-bezier(0, 0.9, 0.5, 1)',
            delay: Math.random() * 200
        });

        animation.onfinish = () => {
            particle.remove();
        };

        document.body.appendChild(particle);
    }, []);

    const onClickHandler = useCallback(({ clientX, clientY }) => {
        console.log(123);
        for (let i = 0; i < quantity; i++) {
            createParticle(clientX, clientY);
        }
    }, []);

    return (
        <Component ref={button} onClick={onClickHandler}>
            {children}
        </Component>
    );
};

export default Button;
