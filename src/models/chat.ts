import { createStore } from "effector/effector.mjs";
import { IChat } from "../types/Chat";

const defaultChat: IChat = {
  chatId: "",
  messages: [],
};

export const $chat = createStore<IChat>(defaultChat);
