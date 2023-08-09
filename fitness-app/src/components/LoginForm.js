import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  background: linear-gradient(to bottom, #f9f9f9, #e6e6e6);
`;

const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 24px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: ${({ success }) => (success ? '#009900' : '#cc0000')};
`;



const LoginForm = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        userEmail: '',
        password: '',
    });
    const [loginMessage, setLoginMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(credentials);
            console.log('Login Successful', response);
            setLoginMessage('Login successful');
            navigate('/');
        } catch (error) {
            console.error('Login Failed', error);
            setLoginMessage('Login unsuccessful');
        }
    };

    return (
        <FormContainer>
            <Title>Login</Title>
            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    name="userEmail"
                    placeholder="Email"
                    value={credentials.userEmail}
                    onChange={handleInputChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleInputChange}
                />
                <Button type="submit">Log In</Button>
            </form>
            <Message success={loginMessage === 'Login successful'}>{loginMessage}</Message>
        </FormContainer>
    );
};

export default LoginForm;
