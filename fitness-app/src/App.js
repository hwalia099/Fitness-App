import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PlanMealsandWorkout from './pages/PlanMealsandWorkout';
import RecordDetails from './pages/RecordDetails';
import TrackProgress from './pages/TrackProgress';

import './App.css';

const App = () => {
  return (
    <Box width = "400px" sx={{width: { xl: '1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/exercise/:id" element ={<ExerciseDetail/>}/>
        <Route path="/plan" element ={<PlanMealsandWorkout/>}/>
        <Route path="/record" element ={<RecordDetails/>}/>
        <Route path="/track" element ={<TrackProgress/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App;