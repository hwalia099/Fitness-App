import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(253, 101, 133, 1) 0%,
    rgba(255, 211, 165, 1) 90%
  );
`;

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  width: 400px;
  height: 300px;
  background-color: #ffffff;
  padding: 10px 30px;
`;

const CardTitle = styled.div`
  text-align: center;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
`;

const Form = styled.div`
  input {
    margin: 10px 0;
    width: 100%;
    background-color: #e2e2e2;
    border: none;
    outline: none;
    padding: 12px 20px;
    border-radius: 4px;
  }

  button {
    background-color: #4796ff;
    color: #ffffff;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    border: none;
    padding: 8px 15px;
    width: 100%;
  }
`;

const Message = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: ${({ success }) => (success ? '#009900' : '#cc0000')};
`;

const LoginForm = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');

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
      const userIdfetched = response.userDetails._id;
      console.log('Login Successful');
      localStorage.setItem('userId', userIdfetched);
      setUserId(userIdfetched);
      setLoginMessage('Login successful');
      navigate('/');
    } catch (error) {
      console.error('Login Failed', error);
      setLoginMessage('Login unsuccessful');
    }
  };

  return (
    <Container>
      <Card>
        <CardTitle>
          <Title>Login</Title>
        </CardTitle>
        <Form>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="userEmail"
              placeholder="Email"
              value={credentials.userEmail}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleInputChange}
            />
            <button type="submit">Log In</button>
          </form>
        </Form>
        <Message success={loginMessage === 'Login successful'}>{loginMessage}</Message>
      </Card>
    </Container>
  );
};

export default LoginForm;
