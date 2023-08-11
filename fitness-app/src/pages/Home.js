import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import './home.css';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  const navigate = useNavigate();

  const [menuAnchor, setMenuAnchor] = useState(null); // To control the menu's open state

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleViewProfile = () => {
    handleMenuClose(); // Close the menu
    navigate('/profileview'); // Navigate to the profile page
  };

  const handleLogout = () => {
    handleMenuClose();
    localStorage.clear();
    navigate('/auth/login'); // Redirect to the login page
  };

  return (
    <Box>
      <HeroBanner />
      <Button onClick={handleMenuOpen} class='menu-button'>Menu</Button>
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
        <MenuItem onClick={handleViewProfile}>View Profile</MenuItem>
      </Menu>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;