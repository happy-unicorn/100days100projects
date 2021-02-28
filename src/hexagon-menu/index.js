import React, {useState} from 'react';
import styled from 'styled-components';
import Menu from './components/Menu';
import girl1 from './images/girl1.png';
import girl2 from './images/girl2.png';
import girl3 from './images/girl3.png';
import girl4 from './images/girl4.png';
import girl5 from './images/girl5.png';
import girl6 from './images/girl6.png';


const Page = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100%;
 width: 100%;
`;

const HexagonMenuPage = () => {
    const [data] = useState([girl1, girl2, girl3, girl4, girl5, girl6]);

    return (
        <Page>
            <Menu data={data}/>
        </Page>
    );
};

export default HexagonMenuPage;