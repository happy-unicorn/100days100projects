import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Component = styled.span`
  display: flex;
  flex-direction: column;
  
  & button {
    margin: 25px 0;
  }
`;
const Icon = styled.div`
  height: 40px;
  width: 40px;
  background-image: url(${({ link }) => link});
  background-size: 100%;
`;

const ButtonsManager = () => {
    const [links] = useState([
        'https://img.icons8.com/fluent/72/popcorn.png',
        'https://img.icons8.com/color/72/we-can-do-it.png',
        'https://img.icons8.com/fluent/72/marijuana-leaf.png',
        'https://img.icons8.com/cotton/72/boletus-mashroom.png',
        'https://img.icons8.com/fluent/72/bitcoin.png',
        'https://img.icons8.com/dusk/72/christmas-stocking.png',
        'https://img.icons8.com/plasticine/72/spa-flower.png'
    ]);

    const buttons = useMemo(() => {
        return links.map((link) => {
            return (
                <Button
                    particleStyles={{
                        backgroundImage: `url(${link})`
                    }}
                    key={link}
                >
                    <Icon link={link}/>
                </Button>
            );
        });
    }, [links]);

    return (
        <Component>
            { buttons }
        </Component>
    );
};

export default ButtonsManager;