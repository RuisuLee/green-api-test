import {
  $phone,
  setPhoneNumberField,
  submittedPhoneNumberForm,
} from "../../models/phoneNumber";
import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";

export const CreateChat = () => {
  return (
    <form className="form__wrapper" onSubmit={submittedPhoneNumberForm}>
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
