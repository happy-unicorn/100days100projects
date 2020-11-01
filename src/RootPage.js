import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pages from './pages.js';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  margin: 40px 20px 20px 20px;
  font-size: 30px;
  color: #c9c9cb;
`;
const CustomLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 300px;
  margin: 20px;
  padding: 0 50px;
  border-radius: 25px;
  background: linear-gradient(145deg, #1f2123, #1a1c1e);
  box-shadow:  9px 9px 18px #17191b, -9px -9px 18px #232527;
  font-size: 18px;
  color: #c9c9cb;
  text-decoration: none;
  
  &:hover {
    box-shadow: inset 9px 9px 18px #17191b, inset -9px -9px 18px #232527; 
  }
`;

const RootPage = () => {
    return (
        <Page>
            <Title>
                #100days100Projects projects
            </Title>
            {
                pages.map(({slug, description, date}) => {
                    return (
                        <CustomLink to={slug} key={date}>
                            {description}
                        </CustomLink>

                    );
                })
            }
        </Page>
    );
};

export default RootPage;