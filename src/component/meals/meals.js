import React from "react";
import Meal from "./meal/meal";
import MealsCss from "./meals.module.css";
const Meals = (props) => {
  return (
    <div className={MealsCss.Mealsbox}>
      {props.meals.map((item) => (
        <Meal key={item.id} meal={item} />
      ))}
    </div>
  );
};

export default Meals;
