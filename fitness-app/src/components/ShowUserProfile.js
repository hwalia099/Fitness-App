import {React, useEffect, useState} from 'react';
import { Box, Typography, Button } from '@mui/material';
import { fetchData } from '../utils/fetchData';

const ShowUserProfile = () => {
    const [userProfile, setUserProfile] = useState();
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
                console.log(response);
                setUserProfile(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchDataFromAPI();
    }, []);

   
  return (
    <Box display="flex" alignItems="center">
      {userProfile && (
      <>
        <Typography variant="h5" gutterBottom>{userProfile.age}</Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>{userProfile.email}</Typography>
      </>
    )}
      <Button variant="outlined" color="primary">
          Edit Profile
        </Button>
    </Box>
  );
};

export default ShowUserProfile;
