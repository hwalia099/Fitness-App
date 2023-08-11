import React, { useState } from 'react';
import axios from 'axios';

const NutritionRecordData = () => {
    const [date, setDate] = useState('');
    const [totalCaloriesConsumed, setTotalCaloriesConsumed] = useState(0);
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const nutritionData = {
            userId: '',
            date,
            totalCaloriesConsumed
        };

        try {
            await axios.post('http://localhost:9000/nutritiontracker', nutritionData);
            alert('Data saved successfully.');
        } catch (error) {
            alert('Error saving data. Please try again.');
        }
    };

    return (
        <div>
            <h2>Record Nutrition Data</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </label>
                <label>
                    Total Calories Consumed:
                    <input type="number" value={totalCaloriesConsumed} onChange={(e) => setTotalCaloriesConsumed(e.target.value)} required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NutritionRecordData;
