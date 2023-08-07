import React from "react";
import PlanDemo from "./PlanDemo";

const Plan = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <h1 className="head_text">
        Generate a Workout and Nutrient Plan using
        <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI</span>
      </h1>
      <h2 className="desc">Simplify your life and leave the planning on us</h2>
      <PlanDemo />
    </header>
  );
};

export default Plan;
