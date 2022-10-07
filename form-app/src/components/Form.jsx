import React, { useState, useContext } from "react";
import Button from "./UI/button/Button";
import classes from "./Form.module.css";
import FormInputItem from "./FormInputItem";
import FormTextareaItem from "./FormTextareaItem";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../context/context";

const Form = () => {
  const navigate = useNavigate();
  const startValues = {
    userName: "",
    userSurname: "",
    birthDate: "",
    telephone: "",
    website: "",
    aboutUser: "",
    stack: "",
    lastProject: "",
  };
  const textareaCharactersCount = {
    aboutUser: 0,
    stack: 0,
    lastProject: 0,
  };

  const [formValues, setFormValues] = useState(startValues);
  const [charactersCount, setCharactersCount] = useState(textareaCharactersCount);
  const [errors, setErrors] = useState(startValues);
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  const validate = (values) => {
    const errors = {};
    const regexName = /(^[А-Я][а-я])/;
    const regexTelephone = /\d{1}[-]\d{4}[-]\d{2}[-]\d{2}$/;
    const regexWebsite = /^(https:\/\/)/;

    for (let key in values) {
      if (!values[key]) {
        errors[key] = "Поле пустое. Заполните, пожалуйста";
      }
    }

    if (values.userName) {
      if (!regexName.test(values.userName.trim())) {
        errors.userName =
          "Ошибка: имя должно быть написано кириллицей, начинаться с заглавной буквы";
      }
    }

    if (values.userSurname) {
      if (!regexName.test(values.userSurname.trim())) {
        errors.userSurname =
          "Ошибка: фамилия должна быть написана кириллицей, начинаться с заглавной буквы";
      }
    }

    if (values.telephone) {
      if (!regexTelephone.test(values.telephone)) {
        errors.telephone = "Ошибка: телефон должен быть введен в формате x-xxxx-xx-xx";
      }
    }

    if (values.website) {
      if (!regexWebsite.test(values.website)) {
        errors.website = "Ошибка: сайт должен начинаться с https://";
      }
    }

    for (let key in textareaCharactersCount) {
      if (values[key]) {
        if (values[key].length > 600) {
          errors[key] = "Превышен лимит символов в поле";
        }
      }
    }

    return errors;
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const textareaHandler = (e) => {
    inputHandler(e);
    const { name } = e.target;
    const currentTextLength = e.target.value.length;
    setCharactersCount({ ...charactersCount, [name]: currentTextLength });
    setErrors({
      ...errors,
      [name]: currentTextLength > 600 ? "Превышен лимит символов в поле" : "",
    });
  };

  const cancelButtonHandler = (e) => {
    e.preventDefault();
    setFormValues(startValues);
    setErrors({});
    navigate("/");
  };

  const submitButtonHandler = (e) => {
    e.preventDefault();
    const currentErrors = validate(formValues);
    setErrors(currentErrors);
    if (Object.keys(currentErrors).length === 0) {
      for (let key in formValues) {
        formValues[key] = formValues[key].trim();
      }
      setUserInfo({
        userName: formValues.userName,
        userSurname: formValues.userSurname,
        userInfo: [
          { title: "Дата рождения", value: formValues.birthDate },
          { title: "Телефон", value: formValues.telephone },
          { title: "Сайт", value: formValues.website },
          { title: "О себе", value: formValues.aboutUser },
          { title: "Стек технологий", value: formValues.stack },
          { title: "Описание последнего проекта", value: formValues.lastProject },
        ],
      });
      navigate("/application");
    }
  };

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      <form className={classes.questionnaire}>
        <h1 className={classes.title}>Создание анкеты</h1>
        <FormInputItem
          name="userName"
          placeholder="Имя"
          type="text"
          value={formValues.userName}
          inputHandler={inputHandler}
          errorMessage={errors.userName}
        />

        <FormInputItem
          name="userSurname"
          placeholder="Фамилия"
          type="text"
          value={formValues.userSurname}
          inputHandler={inputHandler}
          errorMessage={errors.userSurname}
        />

        <FormInputItem
          name="birthDate"
          placeholder="Дата рождения"
          type="date"
          value={formValues.birthDate}
          inputHandler={inputHandler}
          errorMessage={errors.birthDate}
        />

        <FormInputItem
          name="telephone"
          placeholder="Телефон"
          type="text"
          value={formValues.telephone}
          inputHandler={inputHandler}
          errorMessage={errors.telephone}
        />

        <FormInputItem
          name="website"
          placeholder="Сайт"
          type="text"
          value={formValues.website}
          inputHandler={inputHandler}
          errorMessage={errors.website}
        />

        <FormTextareaItem
          name="aboutUser"
          placeholder="О себе"
          value={formValues.aboutUser}
          textareaHandler={textareaHandler}
          errorMessage={errors.aboutUser}
          charactersCount={charactersCount.aboutUser}
        />

        <FormTextareaItem
          name="stack"
          placeholder="Стек технологий"
          value={formValues.stack}
          textareaHandler={textareaHandler}
          errorMessage={errors.stack}
          charactersCount={charactersCount.stack}
        />

        <FormTextareaItem
          name="lastProject"
          placeholder="Описание последнего проекта"
          value={formValues.lastProject}
          textareaHandler={textareaHandler}
          errorMessage={errors.lastProject}
          charactersCount={charactersCount.lastProject}
        />

        <div className="questionnaire-buttons">
          <Button btntype="button_cancel" onClick={cancelButtonHandler}>
            Отмена
          </Button>
          <Button btntype="button_submit" onClick={submitButtonHandler}>
            Сохранить
          </Button>
        </div>
      </form>
    </UserInfoContext.Provider>
  );
};

export default Form;
