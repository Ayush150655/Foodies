import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [animateButton, setAnimateButton] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const numberOfItems = items.reduce((currNumber, item) => {
    return currNumber + item.quantity;
  }, 0);

  const buttonClasses = `${classes.button} ${
    animateButton ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setAnimateButton(true);

    const timer = setTimeout(() => {
      setAnimateButton(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
