import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserInfo, adduserProfile } from '../services/userService';
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

const UserInfo = styled.div`
  background-color: #f7f7f7;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

const UserInfoText = styled.p`
  margin: 5px 0;
  font-size: 16px;
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

const Select = styled.select`
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

const UserProfilePage = () => {
    const { userId } = useParams();
    const [userInfo, setUserInfo] = useState({
        email: '',
        phone: '',
        username: '',
    });
    const [additionalDetails, setAdditionalDetails] = useState({
        userGoal: '',
        height: '',
        currentWeight: '',
        targetWeight: '',
        age: '',
    });

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await getUserInfo(userId);
                setUserInfo(response);
            } catch (error) {
                // Handle error
            }
        };

        fetchUserInfo();
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = name === 'age' || name === 'height' || name === 'targetWeight' || name === 'currentWeight' ? parseFloat(value) : value;

        setAdditionalDetails((prevCredentials) => ({ ...prevCredentials, [name]: parsedValue }));
    };

    const handleAdditionalDetailsSubmit = async () => {
        try {
            const updatedProfile = {
                ...userInfo,
                ...additionalDetails,
            };

            await adduserProfile(userId, updatedProfile);
            // Handle success or navigate to another page if needed
        } catch (error) {
            // Handle error
        }
    };

    return (
        <FormContainer>
            <Title>User Profile</Title>
            <UserInfo>
                <UserInfoText>Email: {userInfo.userEmail}</UserInfoText>
                <UserInfoText>Phone: {userInfo.userPhone}</UserInfoText>
                <UserInfoText>Username: {userInfo.userName}</UserInfoText>
            </UserInfo>
            <h3>Compelte your profile</h3>
            <Input
                type="text"
                name="height"
                placeholder="Height"
                value={additionalDetails.height}
                onChange={handleInputChange}
            />
            <Input
                type="text"
                name="currentWeight"
                placeholder="Current Weight"
                value={additionalDetails.currentWeight}
                onChange={handleInputChange}
            />
            <Input
                type="text"
                name="targetWeight"
                placeholder="Target Weight"
                value={additionalDetails.targetWeight}
                onChange={handleInputChange}
            />
            <Input
                type="text"
                name="age"
                placeholder="Age"
                value={additionalDetails.age}
                onChange={handleInputChange}
            />
            <Select
                name="userGoal"
                value={additionalDetails.goal}
                onChange={handleInputChange}
            >
                <option value="">Select Goal</option>
                <option value="Loose Weight">Loose Weight</option>
                <option value="Gain Weight">Gain Weight</option>
            </Select>
            <Select
                name="Gender"
                value={additionalDetails.goal}
                onChange={handleInputChange}
            >
                <option value="">Select Gender</option>
                <option value="Loose Weight">Male</option>
                <option value="Gain Weight">Female</option>
                <option value="Loose Weight">Prefer not to say</option>
            </Select>
            <Button onClick={handleAdditionalDetailsSubmit}>Submit Profile</Button>
        </FormContainer>
    );
};

export default UserProfilePage;
