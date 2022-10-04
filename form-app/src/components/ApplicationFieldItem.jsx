import React from "react";
import classes from "./ApplicationFieldItem.module.css";

const ApplicationFieldItem = ({ ...props }) => {
  return (
    <p>
      <span className={classes.field_title}>{props.fieldTitle}: </span>
      {props.data}
    </p>
  );
};

export default ApplicationFieldItem;
