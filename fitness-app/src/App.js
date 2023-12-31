import React from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecordData from './pages/RecordData';
import TrackProgress from './pages/TrackProgress';

import './App.css';
import SignupForm from './components/SignupForm';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';
import ViewUserProfile from './pages/ViewUserProfile';
import Plan from './pages/Plan';

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
      path: "/userprofile/:userId",
      element: <UserProfile />,
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
      element: <>
       <SignupForm />
       <Footer />
      </>
    },
    {
      path: '/auth/login',
      element:  <>
      <LoginPage />
      <Footer />
     </>
    },
    {
      path: '/track',
      element: (
        <>
          <Navbar />
          <TrackProgress />
          <Footer />
        </>
      ),
    },
    {
      path: '/profile',
      element: (
        <>
          <Navbar />
          <UserProfile />
          <Footer />
        </>
      )
    },
    {
      path: '/RecordData',  // Add this route
      element: (
        <>
          <Navbar />
          <RecordData />
          <Footer />
        </>
      ),
    },
    {
      path: '/profileview',
      element: (
        <>
          <Navbar />
          <ViewUserProfile />
          <Footer />
        </>
      )
    },
    {
      path: '/plan',
      element: (
        <>
          <Navbar />
          <Plan />
          <Footer />
        </>
      )
    }
  ]);
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      {routing}
    </Box>
  );
};

export default App;
