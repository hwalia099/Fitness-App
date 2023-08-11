import React, { useState } from 'react';
import axios from 'axios';

const WorkoutRecordData = () => {
    const [date, setDate] = useState('');
    const [totalCaloriesBurned, setTotalCaloriesBurned] = useState(0);
    const [workoutCategory, setWorkoutCategory] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const workoutData = {
            userId: '64caff89f19cd3fb01987ec0',
            date,
            totalCaloriesBurned,
            workoutCategory
        };

        try {
            await axios.post('http://localhost:9000/workouttracker', workoutData);
            alert('Data saved successfully.');
        } catch (error) {
            alert('Error saving data. Please try again.');
        }
    };

    return (
        <div>
            <h2>Record Workout Data</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </label>
                <label>
                    Total Calories Burned:
                    <input type="number" value={totalCaloriesBurned} onChange={(e) => setTotalCaloriesBurned(e.target.value)} required />
                </label>
                <label>
                    Workout Category:
                    <input type="text" value={workoutCategory} onChange={(e) => setWorkoutCategory(e.target.value)} required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default WorkoutRecordData;
