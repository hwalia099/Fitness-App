import React, { useState } from "react";
import { useAskChatGPTMutation } from "../services/article";
import "../styles/PlanDemo.scss";

const PlanDemo = () => {
  const [details, setDetails] = useState({
    Age: "",
    Gender: "",
    Height: "",
    CurrentWeight: "",
    MedicalConditions: "",
    FoodAllergies: "",
    PrimaryHealthAndFitnessGoals: "",
    HowManyDaysCanYouWorkoutAWeek: "",
    WorkoutSplit: "",
    DietPreference: "",
    HowManyMealsPerDay: "",
    WhatMacrosIWantToHit: "",
    foodsYouDislike: "",
  });

  const [askChatGPT, { data, error, isLoading }] = useAskChatGPTMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const query = `You are a highly renowned health and nutrition expert FitnessGPT. 
    Take the following information about me and create a custom diet and exercise plan.
    I am ${details.Age}, ${details.Gender}, ${details.Height}. My current weight is ${details.CurrentWeight}.
    My current medical conditions are ${details.MedicalConditions}. I have food allergies to ${details.FoodAllergies}.
    My primary fitness and health goals are ${details.PrimaryHealthAndFitnessGoals}. 
    I can commit to working out ${details.HowManyDaysCanYouWorkoutAWeek} days per week. 
    I prefer and enjoy this type of workout ${details.WorkoutSplit}.
    I have a diet preference ${details.DietPreference}. 
    I want to have ${details.HowManyMealsPerDay} meals and consume ${details.WhatMacrosIWantToHit}. 
    I dislike eating and cannot eat ${details.foodsYouDislike}.`;

    try {
      await askChatGPT({ query });
    } catch (err) {
      console.error("Error submitting query:", err);
    }
  };

  return (
    <div className="plan-demo-container">
      <form className="plan-demo-form" onSubmit={handleSubmit}>
        {/* Age */}
        <div className="form-group">
          <label htmlFor="Age">Age:</label>
          <input
            type="number"
            id="Age"
            name="Age"
            className="age" // Added the "age" class name
            value={details.Age}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Gender */}
        <div className="form-group">
          <label htmlFor="Gender">Gender:</label>
          <input
            type="text"
            id="Gender"
            name="Gender"
            value={details.Gender}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Height */}
        <div className="form-group">
          <label htmlFor="Height">Height:</label>
          <input
            type="text"
            id="Height"
            name="Height"
            value={details.Height}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Current Weight */}
        <div className="form-group">
          <label htmlFor="CurrentWeight">Current Weight:</label>
          <input
            type="number"
            id="CurrentWeight"
            name="CurrentWeight"
            value={details.CurrentWeight}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Medical Conditions */}
        <div className="form-group">
          <label htmlFor="MedicalConditions">Medical Conditions:</label>
          <input
            type="text"
            id="MedicalConditions"
            name="MedicalConditions"
            value={details.MedicalConditions}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Food Allergies */}
        <div className="form-group">
          <label htmlFor="FoodAllergies">Food Allergies:</label>
          <input
            type="text"
            id="FoodAllergies"
            name="FoodAllergies"
            value={details.FoodAllergies}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Primary Health And Fitness Goals */}
        <div className="form-group">
          <label htmlFor="PrimaryHealthAndFitnessGoals">
            Primary Health And Fitness Goals:
          </label>
          <input
            type="text"
            id="PrimaryHealthAndFitnessGoals"
            name="PrimaryHealthAndFitnessGoals"
            value={details.PrimaryHealthAndFitnessGoals}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Days Committed to Work Out */}
        <div className="form-group">
          <label htmlFor="HowManyDaysCanYouWorkoutAWeek">
            How Many Days Can You Work Out a Week:
          </label>
          <input
            type="number"
            id="HowManyDaysCanYouWorkoutAWeek"
            name="HowManyDaysCanYouWorkoutAWeek"
            value={details.HowManyDaysCanYouWorkoutAWeek}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Workout Preference */}
        <div className="form-group">
          <label htmlFor="WorkoutSplit">Workout Preference:</label>
          <input
            type="text"
            id="WorkoutSplit"
            name="WorkoutSplit"
            value={details.WorkoutSplit}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Diet Preference */}
        <div className="form-group">
          <label htmlFor="DietPreference">Diet Preference:</label>
          <input
            type="text"
            id="DietPreference"
            name="DietPreference"
            value={details.DietPreference}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Number of Meals per Day */}
        <div className="form-group">
          <label htmlFor="HowManyMealsPerDay">How Many Meals Per Day:</label>
          <input
            type="number"
            id="HowManyMealsPerDay"
            name="HowManyMealsPerDay"
            value={details.HowManyMealsPerDay}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Macros */}
        <div className="form-group">
          <label htmlFor="WhatMacrosIWantToHit">
            What Macros I Want To Hit:
          </label>
          <input
            type="text"
            id="WhatMacrosIWantToHit"
            name="WhatMacrosIWantToHit"
            value={details.WhatMacrosIWantToHit}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Foods Disliked */}
        <div className="form-group">
          <label htmlFor="foodsYouDislike">Foods You Dislike:</label>
          <input
            type="text"
            id="foodsYouDislike"
            name="foodsYouDislike"
            value={details.foodsYouDislike}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-submit-button">
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Make a Plan"}
          </button>
        </div>
      </form>

      {data && (
        <div>
          <h2>Response:</h2>
          <p>{JSON.stringify(data.response)}</p>
        </div>
      )}

      {error && (
        <div style={{ color: "red" }}>
          <p>Error occurred: {JSON.stringify(error)}</p>
        </div>
      )}
    </div>
  );
};

export default PlanDemo;
