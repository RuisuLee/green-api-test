import "./Chat.css";
import { SendMessage } from "../SendMessage/SendMessage";
import { ChatHistory } from "../ChatHistory/ChatHistory";
import { useStore } from "effector-react";
import { $phone } from "../../models/phoneNumber";
import { useEffect } from "react";
import { $loginForm } from "../../models/login";
import { useNavigate } from "react-router-dom";
import { startPooling } from "../../models/message";

export const Chat = () => {
  const navigate = useNavigate();
  const phone = useStore($phone).number;
  const creds = useStore($loginForm);

  useEffect(() => {
    if (!phone) {
      navigate("/create-chat");
    }
    if (!creds) {
      navigate("/");
    }

    const intervalId = setInterval(startPooling, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="chat__wrapper">
      <header className="chat__header">{phone}</header>
      <ChatHistory></ChatHistory>
      <SendMessage></SendMessage>
    </div>
  );
};
