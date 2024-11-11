import React from "react";
import classes from "./meal.module.css";
import Counter from "./UI/counter/counter";
const Meal = (props) => {
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        <img src={props.meal.img} />
      </div>
      <div className={classes.Txt}>
        <h2 className={classes.Title}>{props.meal.title}</h2>
        <p className={classes.Des}>{props.meal.des}</p>
        <div className={classes.PriceWrap}>
          <span className={classes.Price}>{props.meal.price}</span>
          <Counter meal={props.meal}  />
        </div>
      </div>
    </div>
  );
};

export default Meal;
