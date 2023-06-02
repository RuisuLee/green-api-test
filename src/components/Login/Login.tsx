import { useNavigate } from "react-router-dom";
import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import {
  $loginForm,
  setLoginFormField,
  submittedLoginForm,
} from "../../models/login";

export const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    submittedLoginForm();
    navigate("/create-chat");
  };
  return (
    <form className="form__wrapper" onSubmit={handleSubmit}>
      <header className="form__header">Логин</header>
      <Input
        name="id"
        labelText="id"
        placeholdetText="Введите idInstance"
        className="form__input"
        required={true}
        $form={$loginForm}
        setField={setLoginFormField}
      ></Input>
      <Input
        name="apiToken"
        labelText="apiToken"
        placeholdetText="Введите apiTokenInstance"
        className="form__input"
        required={true}
        $form={$loginForm}
        setField={setLoginFormField}
        type="password"
      ></Input>
      <Button
        buttonText="Войти"
        buttonType="submit"
        className="form__button"
      ></Button>
    </form>
  );
};
