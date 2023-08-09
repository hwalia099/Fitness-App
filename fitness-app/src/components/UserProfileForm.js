import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProfile } from '../services/authService';
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

const UserProfileForm = () => {
    const navigate = useNavigate();

    const [message, setMessage] = useState('');

    const [userProfile, setUserProfile] = useState({
        userId: '64d3024530d81ec7df9e2eb1',
        currentWeight: 0,
        targetWeight: 0,
        age: 0,
        height: 0,
        goal: '',
        gender: ''
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Convert age and height to numbers
        const parsedValue = name === 'age' || name === 'height' || name === 'targetWeight' || name === 'currentWeight' ? parseFloat(value) : value;

        setUserProfile((prevCredentials) => ({ ...prevCredentials, [name]: parsedValue }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createProfile(userProfile);
            console.log('Login Successful', response);
            navigate('/');
        } catch (error) {
            console.error('Login Failed', error);
        }
    };

    return (
        <FormContainer>
            <Title>Profile</Title>
            <form onSubmit={handleSubmit}>
                <Input
                    type="number"
                    name="currentWeight"
                    placeholder="Enter current weight in pounds"
                    value={userProfile.currentWeight || ''}
                    onChange={handleInputChange}
                    min="0"
                />
                <Input
                    type="number"
                    name="targetWeight"
                    placeholder="Enter target weight in pounds"
                    value={userProfile.targetWeight || ''}
                    onChange={handleInputChange}
                    min="0"
                />
                <Input
                    type="number"
                    name="age"
                    placeholder="Enter age"
                    value={userProfile.age || ''}
                    onChange={handleInputChange}
                    min="0"
                />
                <Input
                    type="number"
                    name="height"
                    placeholder="Enter height in cms"
                    value={userProfile.height || ''}
                    onChange={handleInputChange}
                    min="0"
                />
                <select
                    name="gender"
                    value={userProfile.gender}
                    onChange={handleInputChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <select
                    name="goal"
                    value={userProfile.goal}
                    onChange={handleInputChange}>
                    <option value="LooseWeight">Loose Weight</option>
                    <option value="GainWeight">Gain Weight</option>

                </select>

                <Button type="submit">Submit Profile</Button>
            </form>
            <Message success={message === 'Login successful'}>{message}</Message>
        </FormContainer>
    );
};

export default UserProfileForm;