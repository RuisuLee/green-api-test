import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";

export const Login = () => {
  return (
    <div className="form__wrapper">
      <header className="form__header">Логин</header>
      <Input
        name="id"
        labelText="id"
        placeholdetText="Введите idInstance"
        className="form__input"
      ></Input>
      <Input
        name="apiToken"
        labelText="apiToken"
        placeholdetText="Введите apiTokenInstance"
        className="form__input"
      ></Input>
      <Button
        buttonText="Войти"
        buttonType="button"
        className="form__button"
      ></Button>
    </div>
  );
};
