import React, { useMemo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 400px;
  width: 400px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Slide = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  scroll-snap-align: start;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
`;

const SimpleSlider = ({ images }) => {
    const slides = useMemo(() => images.map((link) => {
        return (
            <Slide key={link}>
                <Image src={link}/>
            </Slide>
        );
    }), [images]);

    return (
        <Container>
            { slides }
        </Container>
    );
};

export default SimpleSlider;