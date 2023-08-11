import React from "react";
import PlanDemo from "./PlanDemo";
import "../styles/Plan.scss"; // Import the SCSS file

const Plan = () => {
  return (
    <header className="plan-header">
      <h1 className="head_text">
        Generate a Workout and Nutrient Plan using
        <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI</span>
      </h1>
      <h2 className="desc">Enter the details</h2>
      <PlanDemo />
    </header>
  );
};

export default Plan;
