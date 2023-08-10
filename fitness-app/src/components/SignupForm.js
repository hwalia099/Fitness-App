import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/authService';
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
  background-color: #ffffff;
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

const SignupForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userPhone: '',
        password: '',
    });
    const [signupMessage, setSignupMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signup(formData);
            console.log('Signup Successful', response);
            setSignupMessage('User created successfully');
            navigate('/profile');
        } catch (error) {
            console.error('Signup Failed', error);
            setSignupMessage('Signup failed. Please try again.');
        }
    };

    return (
        <FormContainer>
            <Title>Create an Account</Title>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="userName"
                    placeholder="Name"
                    value={formData.userName}
                    onChange={handleInputChange}
                />
                <Input
                    type="email"
                    name="userEmail"
                    placeholder="Email"
                    value={formData.userEmail}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    name="userPhone"
                    placeholder="Phone"
                    value={formData.userPhone}
                    onChange={handleInputChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <Button type="submit">Sign Up</Button>
            </form>
            <Message success={signupMessage === 'User created successfully'}>
                {signupMessage}
            </Message>
        </FormContainer>
    );
};

export default SignupForm;
