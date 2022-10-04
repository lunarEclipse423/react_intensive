import React from "react";
import classes from "./Application.module.css";
import ApplicationFieldItem from "./ApplicationFieldItem";

const Application = ({ ...props }) => {
  return (
    <div className={classes.application}>
      <h1 className={classes.title}>
        {props.userSurname} {props.userName}
      </h1>
      {props.userInfo.map((field) => (
        <ApplicationFieldItem fieldTitle={field.title} data={field.value} />
      ))}
    </div>
  );
};

export default Application;
