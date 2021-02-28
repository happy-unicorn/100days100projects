import React, { useState } from 'react';
import styled from 'styled-components';
import Grid from './components/Grid';

const Page = styled.div`
  display: flex;
  justify-content: center;
  
  & ul {
    margin: 40px;
  }
`;

const HexagonGridPage = () => {
    const [data] = useState([...Array(50)].map((_, i) => ({ text: i + 1})));

    return (
        <Page>
            <Grid data={data}/>
        </Page>
    );
};

export default HexagonGridPage;