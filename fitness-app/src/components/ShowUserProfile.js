import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import styled from 'styled-components';
import { adduserProfile, updateUserProfile } from '../services/userService';

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

const ShowUserProfile = () => {
    const [userProfile, setUserProfile] = useState({
      age: '',
        targetWeight: '',
        height: '',
        currentWeight: '',
        goal: '',
        gender: ''
    });

    const [editableUserProfile, setEditableUserProfile] = useState({
      currentWeight: '',
      targetWeight: '',
      age: '',
      userGoal: '',
      gender: '',
  });

    console.log(localStorage.getItem('userId'));
    var u = localStorage.getItem('userId');

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            console.log(localStorage.getItem('userId'));
            try {
                const response = await fetchData(
                    `http://localhost:9000/userprofile?userId=${u}`,
                    null
                );
                setUserProfile(response[0]);
                setEditableUserProfile({
                  currentWeight: response.currentWeight,
                  targetWeight: response.targetWeight,
                  age: response.age,
                  userGoal: response.userGoal,
                  gender: response.gender,
              });
                console.log(userProfile);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchDataFromAPI();
    }, []);

    const [additionalDetails, setAdditionalDetails] = useState({
      userGoal: '',
      height: '',
      currentWeight: '',
      targetWeight: '',
      age: '',
      gender: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === 'age' || name === 'height' || name === 'targetWeight' || name === 'currentWeight' ? parseFloat(value) : value;

    setEditableUserProfile((prevData) => ({ ...prevData, [name]: parsedValue }));
};

const handleAdditionalDetailsSubmit = async () => {
  var userId = localStorage.getItem('userId');
  try {
      const updatedProfile = {
          ...editableUserProfile,
      };

      await updateUserProfile(userId, updatedProfile);
      // Handle success or navigate to another page if needed
  } catch (error) {
      // Handle error
  }
};

   
  return (
    <Container>
    <FormContainer>
        <h3>Your Profile Settings</h3>
        <br/>
        <label>Height: </label>
        <Input
            type="text"
            name="height"
            placeholder="Height"
            value={userProfile.height}
            onChange={handleInputChange}
        />
         <label>Current Weight: </label>
        <Input
            type="text"
            name="currentWeight"
            placeholder="Current Weight"
            value={userProfile.currentWeight}
            onChange={handleInputChange}
        />
         <label>Target Weight: </label>
        <Input
            type="text"
            name="targetWeight"
            placeholder="Target Weight"
            value={userProfile.targetWeight}
            onChange={handleInputChange}
        />
         <label>Age: </label>
        <Input
            type="text"
            name="age"
            placeholder="Age"
            value={userProfile.age}
            onChange={handleInputChange}
        />
    </FormContainer>
</Container>


  );
};

export default ShowUserProfile;
