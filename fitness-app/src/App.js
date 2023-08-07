import React from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';
import SignupForm from './components/SignupForm';
import LoginPage from './pages/LoginPage';

const App = () => {
  const routing = useRoutes([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: '/exercise/:id',
      element: (
        <>
          <Navbar />
          <ExerciseDetail />
          <Footer />
        </>
      ),
    },
    {
      path: '/auth/signup',
      element: <SignupForm />,
    },
    {
      path: '/auth/login',
      element: <LoginPage />,
    },
  ]);

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      {routing}
    </Box>
  );
};

export default App;
