import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [validQuantity, setValidQuantity] = useState(true);
  const quantityInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredQuantity = quantityInputRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;

    if (
      enteredQuantity.trim().length === 0 ||
      enteredQuantityNumber < 1 ||
      enteredQuantityNumber > 5
    ) {
      setValidQuantity(false);
      return;
    }
    setValidQuantity(true);

    props.onAddToCart(enteredQuantityNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Quantity"
        ref={quantityInputRef}
        input={{
          id: "quantity" + props.id,
          type: "number",
          step: "1",
          min: "1",
          max: "6",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!validQuantity && <p>Please Enter a valid Qunatity between 1-5</p>}
    </form>
  );
};

export default MealItemForm;
