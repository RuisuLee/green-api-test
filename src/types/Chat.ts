export interface IChat {
  chatId: string;
  messages: Array<IMessage>;
}

export interface IMessage {
  text: string;
  time: number;
  type: "input" | "output";
}
