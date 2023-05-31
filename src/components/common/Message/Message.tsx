import "./Message.css";

interface IMessageProps {
  id?: string;
  text: string;
  time: number;
  type: "input" | "output";
}

export const Message = ({ text, time, type }: IMessageProps) => {
  return (
    <div
      className={`message ${
        type === "input" ? "message--input" : "message--output"
      }`}
    >
      <div>{text}</div>
      <div className="message__time">{time}</div>
    </div>
  );
};
