import React, {useState, useMemo, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import useEventListener from '../hooks/useEventListener';

let slider,
  sliderTrack,
  slides,
  slideWidth = 400,
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  lastTrf = 4 * slideWidth,
  posThreshold = 400 * 0.35,
  trfRegExp = /([-0-9.]+(?=px))/,
  swipeStartTime,
  swipeEndTime;




const Container = styled.div`
  height: 400px;
  width: 400px;
  overflow: hidden;
`;
const SlideBar = styled.div`
  display: flex;
  height: 100%;
`;
const Slide = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  scroll-snap-align: start;
  pointer-events: none;
  user-select: none;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
`;

const Slider = ({ images }) => {
    const [sli, setSlider] = useState(null);
    const [bar, setBar] = useState(null);

    const slis = useMemo(() => images.map((link) => {
        return (
            <Slide key={link}>
                <Image src={link}/>
            </Slide>
        );
    }), [images]);

    const setTransform = function(transform, comapreTransform) {
        if (transform >= comapreTransform) {
          if (transform > comapreTransform) {
            sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
          }
        }
        allowSwipe = false;
      };
    const reachEdge = function() {
        transition = false;
        swipeEndHandler();
        allowSwipe = true;
    };
    const slide = function() {
        if (transition) {
          sliderTrack.style.transition = 'transform .5s';
        }
        sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
    };

    useEffect(() => {
        slider = document.querySelector('.slider');
        sliderTrack = slider.querySelector('.slider-track');
        slides = slider.querySelectorAll('.slide');
        sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
    }, []);

    const swipeActionHandler = (evt) => {
        let style = sliderTrack.style.transform,
            transform = +style.match(trfRegExp)[0];

        posX2 = posX1 - evt.clientX;
        posX1 = evt.clientX;

        posY2 = posY1 - evt.clientY;
        posY1 = evt.clientY;

        if (!isSwipe && !isScroll) {
            let posY = Math.abs(posY2);
            if (posY > 7 || posX2 === 0) {
                isScroll = true;
                allowSwipe = false;
            } else if (posY < 7) {
                isSwipe = true;
            }
        }

        if (isSwipe) {
            if (slideIndex === 0) {
                if (posInit < posX1) {
                    setTransform(transform, 0);
                    return;
                } else {
                    allowSwipe = true;
                }
            }

            // запрет ухода вправо на последнем слайде
            console.log(slideIndex === slides.length);
            if (slideIndex === --slides.length) {
                if (posInit > posX1) {
                    setTransform(transform, lastTrf);
                    return;
                } else {
                    allowSwipe = true;
                }
            }

            if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
                reachEdge();
                return;
            }

            sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
        }
    };
    const swipeEndHandler = (evt) => {
        posFinal = posInit - posX1;

        isScroll = false;
        isSwipe = false;

        document.removeEventListener('touchmove', swipeActionHandler);
        document.removeEventListener('mousemove', swipeActionHandler);
        document.removeEventListener('touchend', swipeEndHandler);
        document.removeEventListener('mouseup', swipeEndHandler);

        if (allowSwipe) {
          swipeEndTime = Date.now();
          if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
            if (posInit < posX1) {
              slideIndex--;
            } else if (posInit > posX1) {
              slideIndex++;
            }
          }

          if (posInit !== posX1) {
            allowSwipe = false;
            slide();
          } else {
            allowSwipe = true;
          }

        } else {
          allowSwipe = true;
        }
    };

    const swipeStartHandler = (evt) => {

        if (allowSwipe) {
            swipeStartTime = Date.now();

            transition = true;

            nextTrf = (slideIndex + 1) * -slideWidth;
            prevTrf = (slideIndex - 1) * -slideWidth;

            posInit = posX1 = evt.clientX;
            posY1 = evt.clientY;

            sliderTrack.style.transition = '';

            document.addEventListener('touchmove', swipeActionHandler);
            document.addEventListener('mousemove', swipeActionHandler);
            document.addEventListener('touchend', swipeEndHandler);
            document.addEventListener('mouseup', swipeEndHandler);

        }
    };

    useEventListener('mousedown', swipeStartHandler, slider);
    useEventListener('touchstart', swipeStartHandler, slider);
    useEventListener('transitionend', () => allowSwipe = true, bar);

    return (
        <Container className={'slider'} ref={element => setSlider(element)}>
            <SlideBar className={'slider-track'} ref={element => setBar(element)}>
                { slis }
            </SlideBar>
        </Container>
    );
};

export default Slider;