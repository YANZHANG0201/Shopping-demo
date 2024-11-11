import React, { useContext } from "react";
import classes from "./cart.module.css";
import CartContext from "../../store/cart-context";
import { useActionData } from "react-router-dom";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  return (
    <div className={classes.Cart}>
      {ctx.totalPrice === 0 ? (
        <p className={classes.price}>未选择</p>
      ) : (
        <p className={classes.price}>{ctx.totalPrice}</p>
      )}
      <p className={classes.amount}>结算</p>
    </div>
  );
};

export default Cart;
