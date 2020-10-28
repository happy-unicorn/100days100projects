import React, {useCallback, useRef, useMemo, useState} from 'react';
import styled from 'styled-components';
import useEventListener from '../hooks/useEventListener';
import gpu from '../images/gpu.png';
import useElement from '../hooks/useElement';

const Component = styled.div`
  width: 30%;
  min-width: 400px;
  transform-style: preserve-3d;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  background-color: #ecf1f4;
  box-shadow:  10px 10px 18px #929597, -10px -10px 18px #ffffff;
  transform-style: preserve-3d;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 40px 0;
  
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;
const Gradient = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%; 
  border-radius: 50%;
  background: radial-gradient(circle, rgb(238,174,202) 0%, rgba(148, 187, 233, 1) 100%);
`;
const Image = styled.img`
  position: absolute;
  top: 0; 
  left: 0; 
  bottom: 0; 
  right: 0;
  width: 80%;
  margin: auto;
  overflow: auto;
  transition: transform 0.75s ease-out;
  object-fit: contain;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #666666;
  transition: transform 0.75s ease-out;
`;
const Description = styled.div`
  
`;
const Button = styled.button`
  padding: 10px 30px;
  margin: 40px;
  border: 3px solid #ecf1f4;
  border-radius: 20px;
  background-color: #ecf1f4;
  box-shadow:  10px 10px 18px #929597, -10px -10px 18px #ffffff;
  font-size: 25px;
  color: #666666;
  outline: none;
  transition: box-shadow 0.2s ease-out, transform 0.75s ease-out;
  
  &:hover {
    box-shadow:  
      5px 5px 9px #929597, -5px -5px 9px #ffffff,
      inset 5px 5px 9px #929597, inset -5px -5px 9px #ffffff;
  }
`;

const Card = () => {
    const [{ xAxis, yAxis }, setAxises] = useState({
        xAxis: 0,
        yAxis: 0
    });
    const [reference, setReference] = useState(null);
    const [isEntered, setIsEntered] = useState(false);

    const element = useElement(reference);

    const styles = useMemo(() => {
        return isEntered ? {
            translateImage: 'translateZ(200px) rotateZ(10deg)',
            translateTitle: 'translateZ(40px)',
            translateButton: 'translateZ(40px)',
            transitionCard: 'none'
        } : {
            translateImage: 'translateZ(0px) rotateZ(0deg)',
            translateTitle: 'translateZ(0px)',
            translateButton: 'translateZ(0px)',
            transitionCard: 'all 0.5s ease'
        };
    }, [isEntered]);

    const mouseMoveHandler = useCallback(({ pageX: xAxis, pageY: yAxis }) => {
        const { top: topIndent, left: leftIndent, width, height } = element.current.getBoundingClientRect();
        setAxises({
            xAxis: -((xAxis - leftIndent) - width / 2) / 20,
            yAxis: ((yAxis - topIndent) - height / 2) / 20
        });
    }, [setAxises]);
    const mouseEnterHandler = useCallback(() => {
        setIsEntered(true);
    }, [setAxises]);
    const mouseLeaveHandler = useCallback(() => {
        setAxises({
            xAxis: 0,
            yAxis: 0
        });
        setIsEntered(false);
    }, [setAxises]);
    useEventListener('mousemove', mouseMoveHandler, reference);
    useEventListener('mouseenter', mouseEnterHandler, reference);
    useEventListener('mouseleave', mouseLeaveHandler, reference);

    return (
        <Component ref={element => setReference(element)}>
            <Wrapper
                style={{
                    transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`,
                    transition: styles.transitionCard
                }}
            >
                <ImageWrapper>
                    <Gradient/>
                    <Image style={{transform: styles.translateImage}} src={gpu}/>
                </ImageWrapper>
                <Title style={{transform: styles.translateTitle}}>
                    GeForce RTX 2080Ti
                </Title>
                <Button style={{transform: styles.translateButton}}>
                    Add to Cart
                </Button>
            </Wrapper>
        </Component>
    );
};

export default Card;