import { Fragment } from "react";

import HeaderButton from "./HeaderButton";
import classes from "./Header.module.css";

import mealImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes["header"]}>
        <h1 className={classes["logo"]}>Meals</h1>
        <HeaderButton onShowCart = {props.onShowCart} />
      </header>
      <div className={classes['image']}>
          <img src={mealImage}/>
      </div>
    </Fragment>
  );
};
export default Header;
