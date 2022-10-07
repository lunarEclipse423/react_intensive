import React, { useContext } from "react";
import classes from "./Application.module.css";
import ApplicationFieldItem from "./ApplicationFieldItem";
import { UserInfoContext } from "../context/context";

const Application = () => {
  const { userInfo } = useContext(UserInfoContext);
  return (
    <div className={classes.application}>
      <h1 className={classes.title}>
        {userInfo.userSurname} {userInfo.userName}
      </h1>
      {userInfo.userInfo.map((field) => (
        <ApplicationFieldItem fieldTitle={field.title} data={field.value} />
      ))}
    </div>
  );
};

export default Application;
