import { Fragment } from "react";
import mealsImage from "../../assets/food-spread.jpg";

const Header = props => {
  return (
    <Fragment>
      <header>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
