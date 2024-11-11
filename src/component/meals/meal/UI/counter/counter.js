import React from "react";
import classes from "./counter.module.css";

//计数器--外部meal组件穿的
const Counter = (props) => {
  const addButton = () => {
    props.onAdd(props.meal);
  };
  const subButton = () => {
    props.onSub(props.meal);
  };
  return (
    <div>
      {props.meal.amount && props.meal.amount !== 0 ? (
        <>
          <button className={classes.Sub} onClick={subButton}>
            -
          </button>
          <span className={classes.count}>{props.meal.amount}</span>
        </>
      ) : (
        ""
      )}
      <button className={classes.Add} onClick={addButton}>
        +
      </button>
    </div>
  );
};

export default Counter;
