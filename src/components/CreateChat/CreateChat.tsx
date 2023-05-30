import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";

export const CreateChat = () => {
  return (
    <div className="form__wrapper">
      <header className="form__header">Создать чат</header>
      <Input
        name="number"
        labelText="Номер телефона"
        placeholdetText="Введите номер телефона"
        className="form__input"
        type="tel"
      ></Input>
      <Button
        buttonText="Создать"
        buttonType="button"
        className="form__button"
      ></Button>
    </div>
  );
};
