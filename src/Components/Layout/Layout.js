import React, { Fragment } from "react";
import mealsImage from "./../../assets/mealsImage.jpg";
import classes from "./Layout.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Layout(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals Junction</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt='A table full of meals'></img>
      </div>
    </Fragment>
  );
}

export default Layout;
