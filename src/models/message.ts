import {
  createEffect,
  createEvent,
  createStore,
  merge,
  sample,
} from "effector";
import { $phone, getChatId } from "./phoneNumber";
import { IMessage } from "../types/Chat";
import { getCreds } from "./login";
import { sendMessage } from "../api/sendMessage";
import { recieveMessage } from "../api/recieveMessage";

export const messageLoadFx = createEffect<any, any, Error>(async () => {
  const creds = getCreds();
  const message = await recieveMessage(creds.id, creds.apiToken, getChatId());
  if (message?.receiptId) {
    return {
      text: message.body.messageData.textMessageData.textMessage,
      time: message.body.timestamp,
      type: "input",
    };
  }
});

export const messageSendFx = createEffect<any, IMessage, Error>(
  async (message) => {
    const creds = getCreds();
    const res = await sendMessage({
      id: creds.id,
      apiToken: creds.apiToken,
      message: message.text,
      chatId: getChatId(),
    });
    if (res === "OK") {
      return message;
    }
  }
);

export const $messageText = createStore("");
export const $messages = createStore<IMessage[]>([]);

export const messageTextChanged = createEvent<string>();
export const messageSendClicked = createEvent();
export const messageEnterPressed = createEvent();

export const startPooling = createEvent();

$messageText
  .on(messageTextChanged, (_, text) => text)
  .on(messageSendFx, () => "");

const messageAdded = merge([messageLoadFx.doneData, messageSendFx.doneData]);

$messages.on(messageAdded, (messages, newMessage) => [...messages, newMessage]);

const messageSend = merge([messageEnterPressed, messageSendClicked]);

sample({
  clock: messageSend,
  source: { chatId: $phone, text: $messageText },
  target: messageSendFx,
  fn: (message) => {
    return {
      text: message.text,
      time: Date.now(),
      type: "output",
    };
  },
});

sample({
  clock: startPooling,
  target: messageLoadFx,
});
