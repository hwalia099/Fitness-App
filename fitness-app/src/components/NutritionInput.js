import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNutritionData } from '../store/nutritionSlice';
import axios from 'axios';

const NutritionInput = () => {
  const [data, setData] = useState({
    userId: 'someUserId',  
    totalCaloriesConsumed: 0,
  });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/recorddata/nutrition', data);  
      
      if (response.data && response.data._id) {  // Checking for an _id to determine success
        dispatch(setNutritionData(data));
        setError(null); 
        setError("Failed to save nutrition data");
      }

    } catch (err) {
      setError(err.message || "An error occurred while saving data");
    }
  };

  return (
    <div>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          name="totalCaloriesConsumed" 
          type="number" 
          onChange={handleChange} 
          value={data.totalCaloriesConsumed} 
          placeholder="Calories Consumed"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NutritionInput;
