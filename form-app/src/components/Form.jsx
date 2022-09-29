import React from "react";
import classes from "./Form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.userName = React.createRef();
    this.userSurname = React.createRef();
    this.birthDate = React.createRef();
    this.telephone = React.createRef();
    this.website = React.createRef();
    this.aboutUser = React.createRef();
    this.stack = React.createRef();
    this.lastProject = React.createRef();
    this.cancelButtonHandler = this.cancelButtonHandler.bind(this);
    this.submitButtonHandler = this.submitButtonHandler.bind(this);
  }

  cancelButtonHandler() {
    this.userName.current.value = "";
    this.userSurname.current.value = "";
    this.birthDate.current.value = "";
    this.telephone.current.value = "";
    this.website.current.value = "";
    this.aboutUser.current.value = "";
    this.stack.current.value = "";
    this.lastProject.current.value = "";
  }

  submitButtonHandler() {
    alert(
      JSON.stringify({
        name: this.userName.current.value,
        surname: this.userSurname.current.value,
        birthDate: this.birthDate.current.value,
        telephone: this.telephone.current.value,
        website: this.website.current.value,
        aboutUser: this.aboutUser.current.value,
        stack: this.stack.current.value,
        lastProject: this.lastProject.current.value,
      })
    );
  }

  render() {
    return (
      <div className={classes.questionnaire}>
        <h1 className={classes.title}>Создание анкеты</h1>

        <label className={classes.input_area}>
          Имя
          <input
            className={classes.input}
            type="text"
            placeholder="Имя"
            ref={this.userName}
          />
        </label>

        <label className={classes.input_area}>
          Фамилия
          <input
            className={classes.input}
            type="text"
            placeholder="Фамилия"
            ref={this.userSurname}
          />
        </label>

        <label className={classes.input_area}>
          Дата рождения
          <input
            className={classes.input}
            type="text"
            placeholder="Дата рождения"
            ref={this.birthDate}
          />
        </label>

        <label className={classes.input_area}>
          Телефон
          <input
            className={classes.input}
            type="text"
            placeholder="Телефон"
            ref={this.telephone}
          />
        </label>

        <label className={classes.input_area}>
          Сайт
          <input
            className={classes.input}
            type="text"
            placeholder="Сайт"
            ref={this.website}
          />
        </label>

        <label className={classes.input_area}>
          О себе
          <textarea
            className={`${classes.input} ${classes.textarea}`}
            placeholder="О себе"
            rows="7"
            ref={this.aboutUser}
          ></textarea>
        </label>

        <label className={classes.input_area}>
          Стек технологий
          <textarea
            className={`${classes.input} ${classes.textarea}`}
            placeholder="Стек технологий"
            rows="7"
            ref={this.stack}
          ></textarea>
        </label>

        <label className={classes.input_area}>
          Описание последнего проекта
          <textarea
            className={`${classes.input} ${classes.textarea}`}
            placeholder="Описание последнего проекта"
            rows="7"
            ref={this.lastProject}
          ></textarea>
        </label>

        <div className="questionnaire-buttons">
          <button
            className={`${classes.button} ${classes.button_cancel} }`}
            onClick={this.cancelButtonHandler}
          >
            Отмена
          </button>
          <button
            className={`${classes.button}  ${classes.button_submit}`}
            onClick={this.submitButtonHandler}
          >
            Сохранить
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
