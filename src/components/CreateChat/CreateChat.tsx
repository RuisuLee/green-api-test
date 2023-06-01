import { useNavigate } from "react-router-dom";
import {
  $phone,
  setPhoneNumberField,
  submittedPhoneNumberForm,
} from "../../models/phoneNumber";
import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import { useStore } from "effector-react";
import { useEffect } from "react";
import { $loginForm } from "../../models/login";

export const CreateChat = () => {
  const navigate = useNavigate();
  const phone = useStore($phone);
  const creds = useStore($loginForm);

  useEffect(() => {
    if (!creds.apiToken || !creds.id) {
      navigate("/");
    }
  }, []);

  const handleSubmit = () => {
    submittedPhoneNumberForm();
    navigate(`../chat/${phone.number}`);
  };
  return (
    <form className="form__wrapper" onSubmit={handleSubmit}>
      <header className="form__header">Создать чат</header>
      <Input
        name="number"
        labelText="Номер телефона"
        placeholdetText="Введите номер телефона"
        className="form__input"
        type="tel"
        $form={$phone}
        setField={setPhoneNumberField}
      ></Input>
      <Button
        buttonText="Создать"
        buttonType="submit"
        className="form__button"
      ></Button>
    </form>
  );
};
