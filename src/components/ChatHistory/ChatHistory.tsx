import { useList } from "effector-react";
import { $messages } from "../../models/message";
import { Message } from "../common/Message/Message";

import "./ChatHistory.css";

export const ChatHistory = () => {
  const messages = useList($messages, {
    fn: (message) =>
      message && (
        <Message
          key={message.time}
          text={message.text}
          type={message.type}
          time={message.time}
        ></Message>
      ),
    keys: [],
    placeholder: <div>Тут пока ничего нет..</div>,
  });

  return <main className="chat-history__main">{messages}</main>;
};
