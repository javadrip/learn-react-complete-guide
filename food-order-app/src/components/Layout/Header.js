import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/food-spread.jpg";

const Header = props => {
  return (
    <Fragment>
      <header>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes.header}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
