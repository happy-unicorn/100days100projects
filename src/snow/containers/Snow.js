import React, {useCallback, useEffect, useRef} from 'react';
import styled, { keyframes } from 'styled-components';
import snowflake from '../images/snowflake.png';

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  & div {
    width: 30px;
    height: 100%;
    color: #fff;
    position: absolute;
    top: -20px;
    animation: fall 5s linear forwards;
    background-image: url('https://img.icons8.com/fluent/72/popcorn.png');
    background-size: 100%;
    backface-visibility: visible;
  }
`;
const Snow = () => {
    const container = useRef(null);

    const createSnowflake = useCallback(() => {
        const snowflake = document.createElement('div');

    }, [container]);
    function createSnowFlake() {
	// Creating the <i> tag
	const snow_flake = document.createElement('div');
	// Adding the required classes for the FontAwesome icon to show up
	snow_flake.classList.add('far');
	snow_flake.classList.add('fa-snowflake');

	// Randomly generate the width to be between 10 and 20 px
	snow_flake.style.width = Math.random() * 10 + 10 + 'px';
	snow_flake.style.height = Math.random() * 10 + 10 + 'px';

	// Randomly generate the left position to be between 0 and the innerWidth of the screen
	snow_flake.style.left = Math.random() * window.innerWidth + 'px';

	// Randomly generate the animationDuration - between 2 and 5 seconds
	snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';

	// Randomly add an opacity - between 0 and 1
	snow_flake.style.opacity = Math.random();

	// Add the newly created <i> tag inside the <body> tag
	container.current.appendChild(snow_flake);

	// Set a timeout to remove the snow_flake from the DOM after 5 seconds
	// as we don't want it to overload the page
	setTimeout(() => {
		snow_flake.remove();
	}, 5000);
}
    useEffect(() => {
        setInterval(createSnowFlake, 100);
    }, []);

    return (
        <Container ref={container}/>
    );
};

export default Snow;