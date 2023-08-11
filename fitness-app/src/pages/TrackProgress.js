import React, { useEffect, useRef, useState } from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Chart from 'chart.js/auto';
import '../styles/trackProgress.css';
import { fetchData } from '../utils/fetchData';

const TrackProgress = () => {
    const chartRef = useRef(null);
    const [duration, setDuration] = useState('7days');
    const [exerciseData, setExerciseData] = useState([]);

    const getDatesForDuration = (duration) => {
        const currentDate = new Date();
        const dates = [];

        for (let i = getNumberOfDays(duration) - 1; i >= 0; i--) {
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() - i);
            dates.push(formatDate(date)); // Use the formatDate function to get the date in "MMM DD" format
        }
        return dates;
    };

    const formatDate = (date) => {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000); // Apply local timezone offset
        const day = localDate.getDate().toString().padStart(2, '0');
        const month = monthNames[localDate.getMonth()];
        return `${month} ${day}`;
    };

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            console.log(localStorage.getItem('userId'));
            try {
                const response = await fetchData(
                    `http://localhost:9000/progresstracker?userId=${localStorage.getItem('userId')}`,
                    null
                );
                setExerciseData(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataFromAPI();
    }, [duration]);

    useEffect(() => {
        const chartLabels = getDatesForDuration(duration);
        const chartData = Array.from({ length: getNumberOfDays(duration) }, () => ({
            caloriesBurned: null,
            caloriesConsumed: null,
        }));

        // Map the exerciseData to the corresponding date in the chartData
        exerciseData.forEach((data) => {
            const localDate = new Date(data.createdDate);
            localDate.setDate(localDate.getDate() + 1);
            const index = chartLabels.indexOf(formatDate(localDate));
            if (index !== -1) {
                chartData[index] = {
                    caloriesBurned: data.totalCaloriesBurned,
                    caloriesConsumed: data.totalCaloriesConsumed,
                };
            }
        });
        // Chart data and configuration
        const data = {
            labels: chartLabels,
            datasets: [
                {
                    label: 'Calories Burned',
                    data: chartData.map((data) => data.caloriesBurned), // Use the 'totalCaloriesBurned' field from exerciseData as chart data
                    backgroundColor: 'rgba(255, 0, 0, 0.4)',
                    borderColor: 'rgba(255, 0, 0, 1)',
                    borderWidth: 1,
                    type: 'line',
                    yAxisID: 'y-axis-burned'
                },
                {
                    label: 'Calories Consumed',
                    data: chartData.map((data) => data.caloriesConsumed), // Use the 'totalCaloriesConsumed' field from exerciseData as chart data
                    backgroundColor: 'rgba(2255, 165, 0, 0.4)',
                    borderColor: 'rgba(255, 165, 0, 1)',
                    borderWidth: 1,
                    type: 'line',
                    yAxisID: 'y-axis-consumed',
                },
            ],
        };

        const options = {
            scales: {
                x: {
                    grid: {
                        display: false, // Remove x-axis grid lines
                    },
                },
                "y-axis-burned": {
                    grid: {
                        display: false, // Remove x-axis grid lines
                    },
                    type: 'linear',
                    position: 'left',
                    beginAtZero: true,
                },
                "y-axis-consumed": {
                    grid: {
                        display: false, // Remove x-axis grid lines
                    },
                    // Y-axis ID for "Calories Consumed"
                    type: 'linear',
                    position: 'right',
                    beginAtZero: true,
                },
            },
        };

        const config = {
            data: data,
            options: options
        };

        // Create and destroy the chart
        const myChart = new Chart(chartRef.current, config);

        return () => {
            myChart.destroy();
        };
    }, [duration, exerciseData]);

    const handleDurationChange = (event, newDuration) => {
        if (newDuration !== null) {
            setDuration(newDuration);
        }
    };

    // Helper function to get the number of days based on the selected duration
    const getNumberOfDays = (duration) => {
        switch (duration) {
            case '7days':
                return 7;
            case '15days':
                return 15;
            case '1month':
                return 30; // Assuming a month has 30 days for simplicity
            default:
                return 7;
        }
    };

    return (
        <Box id="track" style={{ width: '75%', margin: '0 auto' }}>
            <h2>Fitness Journey Progress</h2>

            <ToggleButtonGroup
                value={duration}
                exclusive
                onChange={handleDurationChange}
                aria-label="duration selector"
            >
                <ToggleButton value="7days" aria-label="7 days">
                    7 days
                </ToggleButton>
                <ToggleButton value="15days" aria-label="15 days">
                    15 days
                </ToggleButton>
                <ToggleButton value="1month" aria-label="1 month">
                    1 month
                </ToggleButton>
            </ToggleButtonGroup>

            <canvas ref={chartRef} width={400} height={300}></canvas>
        </Box>
    );
};

export default TrackProgress;
