import React from "react";
import classes from "./filtermeals.module.css";

const FilterMeals = (props) => {
  const inputChangeHandler = (e) => {
    let keyword = e.target.value;
    props.onFilter(keyword);
  };
  return (
    <div className={classes.filterbox}>
      <input
        onChange={inputChangeHandler}
        type="text"
        placeholder={"please enter the keyword"}
      ></input>
    </div>
  );
};

export default FilterMeals;
