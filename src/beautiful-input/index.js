import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import Input from './components/Input';
import { themes } from './styles/themes';
import schema from './schemas/schema';

const Page = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background.color.main};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  align-items: center;
  justify-content: center;
  max-width: 550px;
  padding: 40px 0;
  border-radius: ${props => props.theme.border.radius.standard};
  background-color: ${props => props.theme.background.color.main};
  box-shadow: 
    ${props => props.theme.shadow.direction.positive} ${props => props.theme.shadow.color.dark}, 
    ${props => props.theme.shadow.direction.negative} ${props => props.theme.shadow.color.light};
  & > div {
    width: 80%;
    padding: 0 40px;
  }
`;
const Switch = styled.span`
  display: flex;
  position: fixed;
  top: 20px;
  left: 20px;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: ${props => props.theme.border.radius.standard};
  background-color: ${props => props.theme.background.color.main};
  box-shadow: 
    ${props => props.theme.shadow.direction.positive} ${props => props.theme.shadow.color.dark}, 
    ${props => props.theme.shadow.direction.negative} ${props => props.theme.shadow.color.light};
  font-family: ${props => props.theme.text.font.bold};
  font-size: ${props => props.theme.text.size.big};
  color: ${props => props.theme.text.color.main};
`;

const BeautifulInputPage = () => {
    const [theme, setTheme] = useState('dark');

    const themeSwitchHandler = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme, setTheme]);

    return (
        <Page theme={themes[theme]}>
            <Switch theme={themes[theme]} onClick={themeSwitchHandler}>T</Switch>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={schema}
            >
                {() => (
                    <Form noValidate theme={themes[theme]}>
                        <Input type={'email'} name={'email'} placeholder={'Email'} error={'help'} theme={themes[theme]}/>
                        <Input type={'password'} name={'password'} placeholder={'Password'} theme={themes[theme]}/>
                    </Form>
                )}
            </Formik>
        </Page>
    );
};

export default BeautifulInputPage;