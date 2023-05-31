import {
  createEffect,
  createEvent,
  createStore,
  merge,
  sample,
} from "effector";
import { $phone } from "./phoneNumber";
import { IMessage } from "../types/Chat";

export const messagesLoadFx = createEffect<void, IMessage[], Error>(() => {
  // const history = loadHistory()
  // await wait()
  return [];
});

export const messageSendFx = createEffect<void, IMessage, Error>(
  (params: any) => {
    console.log(params);
    return {} as IMessage;
  }
);
// async ({text, author}: SendMessage) => {
//   const message: Message = {
//     id: createOid(),
//     author,
//     timestamp: Date.now(),
//     text,
//   }
//   const history = await messagesLoadFx()
//   await wait()
//   saveHistory([...history, message])
//   return message
// },

export const $messageText = createStore("");
export const $messages = createStore<IMessage[]>([]);

export const messageTextChanged = createEvent<string>();
export const messageSendClicked = createEvent();
export const messageEnterPressed = createEvent();

$messageText
  .on(messageTextChanged, (_, text) => text)
  .on(messageSendFx, () => "");

$messages
  .on(messagesLoadFx.doneData, (_, messages) => messages)
  .on(messageSendFx.doneData, (messages, newMessage) => [
    ...messages,
    newMessage,
  ]);

const messageSend = merge([messageEnterPressed, messageSendClicked]);

sample({
  clock: messageSend,
  source: { chatId: $phone, text: $messageText },
  target: messageSendFx,
  fn: (message) => {
    return {
      text: message.text,
      timestamp: Date.now(),
      type: "output",
    };
  },
});
