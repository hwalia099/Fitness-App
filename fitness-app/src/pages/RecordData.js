import React, { useState } from 'react';
import axios from 'axios';
import WorkoutRecordData from '../components/WorkoutRecordData';
import '../styles/RecordData.scss';

const RecordData = () => {
  const [breakfastCalories, setBreakfastCalories] = useState("");
  const [lunchCalories, setLunchCalories] = useState("");
  const [dinnerCalories, setDinnerCalories] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const totalCaloriesConsumed = breakfastCalories + lunchCalories + dinnerCalories;

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
       const formattedDate = `${selectedDate}T00:00:00.000Z`;
      const response = await axios.post('http://localhost:9000/nutritiontracker', {
        userId : '64cb001290463f92812295cf',
        date: formattedDate,
        totalCaloriesConsumed
      });
      
      if (response.data.success) {
        setSuccess(true);
      } else {
        setError(true);
      }

    } catch (err) {
      setError(err.message || "An error occurred while saving data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='body'>
    <div className="container">
      {/* <div className="navbar">
    <a href="/">Home</a>
    <a href="/exercises">Exercises</a>
    <a href="/plan">Plan</a>
    <a href="/RecordData">Record Progress</a>
    <a href="/TrackProgress">Track Progress</a>
</div> */}


      <h1 className='header-primary'>Record Your Daily Data</h1>
      <div className="date-picker">
  <label className='date-label'>
    Select Date:
    <input 
    className='date-input'
      type="date" 
      value={selectedDate} 
      max={new Date().toISOString().split('T')[0]}
      onChange={(e) => setSelectedDate(e.target.value)}
    />
  </label>
</div>

      <p className='instruction-text'>Enter your nutritional intake and workout details for today. This tool is designed to help you monitor and improve your daily nutrition and workout habits.</p>
      
      <section>
        <h2>Nutritional Intake</h2>
        <p>Tip: On average, a banana has around 105 calories, a glass of milk contains about 150 calories, and a bowl of rice has approximately 240 calories.</p>

        <div className="nutrition-input">
          <label>
            Breakfast : 
            <input 
              type="text" 
              placeholder='enter your calories here!'
              value={breakfastCalories}
              onChange={(e) => setBreakfastCalories(+e.target.value)}
            />
          </label>

          <label>
            Lunch : 
            <input 
              type="text" 
              placeholder='enter your calories here!'
              value={lunchCalories}
              onChange={(e) => setLunchCalories(+e.target.value)}
            />
          </label>

          <label>
            Dinner : 
            <input 
              type="text" 
              placeholder='enter your calories here!'
              value={dinnerCalories}
              onChange={(e) => setDinnerCalories(+e.target.value)}
            />
          </label>

          <p className='p-tag'><strong>Total Calories Consumed Today:</strong> {totalCaloriesConsumed}</p>
          {/* <NutritionRecordData/> */}
          <button className='btn' onClick={handleSubmit} disabled={loading}>
            {loading ? "Saving..." : "Save Total Calories"}
          </button>
          
          {error && <p style={{color: "red"}}>{error}</p>}
          {success && <p style={{color: "green"}}>Total calories saved successfully!</p>}
        </div>
      </section>

      <section>
        <h2>Workout Details</h2>
        <WorkoutRecordData />
        <p>Regular exercise combined with a balanced diet can significantly improve your physical and mental well-being. Stay consistent and track your progress!</p>
      </section>
    </div>
    </div>
  );
}

export default RecordData;
