import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWorkoutData } from '../store/workoutSlice';
import axios from 'axios';
const WorkoutInput = () => {
  const [data, setData] = useState({
    userId: 'user123', 
    caloriesBurned: 0,
    workoutCategory: ''
  });
  const [workoutType, setWorkoutType] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleWorkoutChange = (e) => {
    setWorkoutType(e.target.value);
    setData({
      ...data,
      workoutCategory: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/recorddata/workout', data);
      
      if (response.data) {
        dispatch(setWorkoutData(data));
        setError(null);
      } else {
        setError("Failed to save workout data");
      }
    } catch (err) {
      setError(err.message || "An error occurred while saving data");
    }
  };


  return (
    <div>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}><select name="workoutCategory" value={workoutType} onChange={handleWorkoutChange}>
   
    <optgroup label="Chest - Strength Training">
        <option value="Bench Press">Bench Press</option>
        <option value="Incline Dumbbell Press">Incline Dumbbell Press</option>
        <option value="Chest Dips">Chest Dips</option>
        <option value="Push Ups">Push Ups</option>
        <option value="Chest Flyes">Chest Flyes</option>
    </optgroup>

  
    <optgroup label="Legs - Strength Training">
        <option value="Squats">Squats</option>
        <option value="Leg Press">Leg Press</option>
        <option value="Romanian Deadlift">Romanian Deadlift</option>
        <option value="Lunges">Lunges</option>
        <option value="Calf Raises">Calf Raises</option>
    </optgroup>

    
    <optgroup label="Back - Strength Training">
        <option value="Pull Ups">Pull Ups</option>
        <option value="Barbell Rows">Barbell Rows</option>
        <option value="Deadlift">Deadlift</option>
        <option value="Lat Pulldown">Lat Pulldown</option>
        <option value="Face Pulls">Face Pulls</option>
    </optgroup>

    <optgroup label="Cardio">
        <option value="Running">Running</option>
        <option value="Jump Rope">Jump Rope</option>
        <option value="Cycling">Cycling</option>
        <option value="Swimming">Swimming</option>
        <option value="Stair Climbing">Stair Climbing</option>
    </optgroup>
</select>


        {/* Input for calories burned */}
        <input 
          name="caloriesBurned" 
          type="number" 
          onChange={handleChange} 
          value={data.caloriesBurned} 
          placeholder="Calories Burned"
        />
        
        {/* You can add inputs for reps, sets, and other details here if needed */}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WorkoutInput;
