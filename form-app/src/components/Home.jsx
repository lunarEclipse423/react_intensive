import React from "react";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import Button from "./UI/button/Button";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.home}>
      <h1>Привет-привет~</h1>
      <span className={classes.home_text}>
        Хочешь заполнить форму? Тогда скорее жми на этого кота!
      </span>
      <Button btntype="button_home" onClick={() => navigate("/form")}>
        🐈‍⬛🐾
      </Button>
    </div>
  );
};

export default Home;
