import { useEvent, useStore } from "effector-react";
import {
  $messageText,
  messageEnterPressed,
  messageSendClicked,
  messageTextChanged,
} from "../../models/message";
import send from "../../assets/send.svg";

import "./SendMessage.css";

export const SendMessage = () => {
  const messageText = useStore($messageText);

  const handleEnterPress = useEvent(messageEnterPressed);
  const handleSendClick = useEvent(messageSendClicked);
  const handleTextChange = useEvent(messageTextChanged);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleEnterPress();
    }
  };

  return (
    <div className="send-message__wrapper">
      <input
        value={messageText}
        onChange={(event) => handleTextChange(event.target.value)}
        onKeyDown={handleKeyPress}
        className="send-message__input"
        placeholder="Введите сообщение.."
      />
      <img
        src={send}
        alt="Отправить"
        className="send-message__button"
        onClick={() => handleSendClick()}
      />
    </div>
  );
};
