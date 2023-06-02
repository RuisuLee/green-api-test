import { useEffect, useRef } from "react";
import { timeConverter } from "../../../helpers/timeConverter";
import "./Message.css";

interface IMessageProps {
  id?: string;
  text: string;
  time: number;
  type: "input" | "output";
}

export const Message = ({ text, time, type }: IMessageProps) => {
  const refMessage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (refMessage.current) {
      refMessage.current.scrollIntoView();
    }
  }, []);
  return (
    <div
      ref={refMessage}
      className={`message ${
        type === "input" ? "message--input" : "message--output"
      }`}
    >
      <div>{text}</div>
      <div className="message__time">{timeConverter(time)}</div>
    </div>
  );
};
