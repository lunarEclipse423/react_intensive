import React from "react";
import Textarea from "./UI/textarea/Textarea";
import classes from "./FormTextareaItem.module.css";

const FormTextareaItem = ({ ...props }) => {
  return (
    <div className={classes.form_textarea}>
      <label className={classes.input_area}>{props.placeholder}</label>
      <Textarea
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.textareaHandler}
      ></Textarea>
      <span className={classes.characters_left}>
        Осталось {props.charactersCount}/600 символов
      </span>
      <span className={classes.error}>{props.errorMessage}</span>
    </div>
  );
};

export default FormTextareaItem;
