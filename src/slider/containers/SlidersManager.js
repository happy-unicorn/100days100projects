import React, {useState} from 'react';
import styled from 'styled-components';
import Slider from '../components/Slider';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 500px;
`;
const Description = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 30px;
   font-size: 30px;
   color: #485e44;
`;

const SlidersManager = () => {
    const [descriptions, setDescriptions] = useState({});

    const propagateHandler = (id) => ({ xAxisRatio }) => {
        setDescriptions(prevDescriptions => {
            return {
                ...prevDescriptions,
                [id]: xAxisRatio.toFixed(2)
            };
        });
    };

    return (
        <Container>
            <Description>
                {descriptions.first}
            </Description>
            <Slider propagateEvent={propagateHandler('first')}/>
            <Description>
                {descriptions.second}
            </Description>
            <Slider propagateEvent={propagateHandler('second')}/>
            <Description>
                {descriptions.third}
            </Description>
            <Slider propagateEvent={propagateHandler('third')}/>
        </Container>
    );
};

export default SlidersManager;