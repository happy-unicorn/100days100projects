import React from 'react';
import styled from 'styled-components';
import Square from '../components/Square';
import Bar from '../components/Bar';
import Try from '../components/Try';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 350px;
    height: 300px;
    border-radius: 145px 20px 20px 145px;
    box-shadow: 5px 5px 8px #111213, -5px -5px 8px #292c2f;
`;

const ColorPicker = () => {
    return (
        <Container>
            {/*<Square/>*/}
            {/*<Bar/>*/}
            <Try/>
        </Container>
    );
};

export default ColorPicker;