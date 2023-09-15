import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Quantity"
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
    </form>
  );
};

export default MealItemForm;
