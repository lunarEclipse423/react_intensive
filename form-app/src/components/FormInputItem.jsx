import React from "react";
import Input from "./UI/input/Input";
import classes from "./FormInputItem.module.css";

const FormInputItem = ({ ...props }) => {
  return (
    <div className={classes.form_input}>
      <label className={classes.input_area}>{props.placeholder}</label>
      <Input
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.inputHandler}
      />
      <span className={classes.error}>{props.errorMessage}</span>
    </div>
  );
};

export default FormInputItem;
