import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, ...props }) => {
  if (props.btntype === "button_cancel") {
    return (
      <button {...props} className={`${classes.button} ${classes.button_cancel}`}>
        {children}
      </button>
    );
  } else if (props.btntype === "button_submit") {
    return (
      <button {...props} className={`${classes.button} ${classes.button_submit}`}>
        {children}
      </button>
    );
  } else {
    return (
      <button {...props} className={`${classes.button} ${classes.button_home}`}>
        {children}
      </button>
    );
  }
};

export default Button;
