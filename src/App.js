import "./App.css";
import styles from "./style.module.css";
import Meals from "./component/meals/meals";
import { useState } from "react";
import CartContext from "./store/cart-context";
import FilterMeals from "./component/filter/filtermeals";
import Cart from "./component/cart/cart";

const MEAL_DATA = [
  {
    id: "1",
    title: "小鱼",
    desc: "百分百傲娇",
    price: 112,
    img: "./img/meals/1.jpeg",
  },
  {
    id: "2",
    title: "星星",
    desc: "百分百可爱",
    price: 125,
    img: "./img/meals/2.jpg",
  },
  {
    id: "3",
    title: "小鱼",
    desc: "百分百可爱hha",
    price: 312,
    img: "./img/meals/1.jpeg",
  },
  {
    id: "4",
    title: "星星",
    desc: "百分百傲娇",
    price: 212,
    img: "./img/meals/2.jpg",
  },
  {
    id: "5",
    title: "小鱼",
    desc: "百分百可爱",
    price: 122,
    img: "./img/meals/1.jpeg",
  },
  {
    id: "6",
    title: "星星",
    desc: "百分百可爱hha",
    price: 120,
    img: "./img/meals/2.jpg",
  },
  {
    id: "7",
    title: "星星",
    desc: "百分百可爱hha",
    price: 120,
    img: "./img/meals/2.jpg",
  },
  {
    id: "8",
    title: "星星",
    desc: "百分百可爱hha",
    price: 120,
    img: "./img/meals/2.jpg",
  },
];
const App = () => {
  const [mealsData, setMealsData] = useState(MEAL_DATA);
  //创建一个state 用来存储购物车的数据
  //需要存什么 商品 商品总价 商品总数
  const [cartData, setCartData] = useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });
  const addItem = (meal) => {
    //对购物车复制
    const newCart = { ...cartData };
    //商品进入购物车
    if (newCart.items.indexOf(meal) === -1) {
      newCart.items.push(meal);
      meal.amount = 1;
    } else {
      meal.amount += 1;
    }
    //总的数量
    newCart.totalAmount += 1;
    //总的钱
    newCart.totalPrice += meal.price;

    setCartData(newCart);
  };
  const removeItem = (meal) => {
    //对购物车复制
    const newCart = { ...cartData };
    //商品进入购物车
    if (newCart.items.indexOf(meal) === -1) {
      return;
    } else {
      meal.amount -= 1;
    }
    //总的数量
    if (meal.amount === 0) {
      newCart.items.splice(newCart.items.indexOf(meal), 1);
    }
    //总的钱
    newCart.totalAmount -= 1;
    newCart.totalPrice -= meal.price;

    setCartData(newCart);
  };
  const filterHandler = (keyword) => {
    const newData = MEAL_DATA.filter(
      (item) => item.title.indexOf(keyword) !== -1
    );
    setMealsData(newData);
  };
  return (
    <CartContext.Provider value={{ ...cartData, addItem, removeItem }}>
      <div>
        <FilterMeals
          onFilter={filterHandler}
          style={{ width: "750rem", height: 200 }}
        />
        <Meals meals={mealsData} style={{ width: "750rem", height: 200 }} />
        <Cart />
      </div>
    </CartContext.Provider>
  );
};

export default App;
