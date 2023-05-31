import "./Dialogue.css";
import { Message } from "../common/Message/Message";
import { SendMessage } from "../SendMessage/SendMessage";

export const Dialogue = () => {
  const messages = [
    {
      id: "1",
      text: "bla bla bla swej;iahuvldsjn iuefkawjefnclsu ecwenfjabwef rhgbjfxb 945hgbverguerbv mekadrvhnfidn vbr4wk5 rgovdfioj sv wknogevg rkf ozerinfhgoewg rvsjdnf bjeaown4gowi4j rebkd fbsow4hobg akes bnr4ng rbkf ",
      time: "15:30",
      type: "input" as const,
    },
    {
      id: "2",
      text: "bla bla bla",
      time: "15:31",
      type: "output" as const,
    },
    {
      id: "3",
      text: "bla bla bla",
      time: "15:32",
      type: "input" as const,
    },
    {
      id: "1",
      text: "bla bla bla swej;iahuvldsjn iuefkawjefnclsu ecwenfjabwef rhgbjfxb 945hgbverguerbv mekadrvhnfidn vbr4wk5 rgovdfioj sv wknogevg rkf ozerinfhgoewg rvsjdnf bjeaown4gowi4j rebkd fbsow4hobg akes bnr4ng rbkf ",
      time: "15:30",
      type: "input" as const,
    },
    {
      id: "2",
      text: "bla bla bla",
      time: "15:31",
      type: "output" as const,
    },
    {
      id: "3",
      text: "bla bla bla",
      time: "15:32",
      type: "input" as const,
    },
    {
      id: "1",
      text: "bla bla bla swej;iahuvldsjn iuefkawjefnclsu ecwenfjabwef rhgbjfxb 945hgbverguerbv mekadrvhnfidn vbr4wk5 rgovdfioj sv wknogevg rkf ozerinfhgoewg rvsjdnf bjeaown4gowi4j rebkd fbsow4hobg akes bnr4ng rbkf ",
      time: "15:30",
      type: "input" as const,
    },
    {
      id: "2",
      text: "bla bla bla",
      time: "15:31",
      type: "output" as const,
    },
    {
      id: "3",
      text: "bla bla bla",
      time: "15:32",
      type: "input" as const,
    },
  ];
  return (
    <div className="dialogue__wrapper">
      <header className="dialogue__header">+7 XXX XXX XX XX</header>
      <main className="dialogue__main">
        {messages.map((message) => (
          <Message
            key={message.id}
            text={message.text}
            type={message.type}
            time={message.time}
          ></Message>
        ))}
      </main>
      <SendMessage></SendMessage>
    </div>
  );
};
