import {
  createEffect,
  createEvent,
  createStore,
  merge,
  sample,
} from "effector";
import { $phone } from "./phoneNumber";

export const messageSendFx = createEffect((params: any) => {
  console.log(params);
});
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

export const messageTextChanged = createEvent<string>();
export const messageSendClicked = createEvent();
export const messageEnterPressed = createEvent();

$messageText.on(messageTextChanged, (_, text) => text);

const messageSend = merge([messageEnterPressed, messageSendClicked]);

sample({
  clock: messageSend,
  source: { chatId: $phone, text: $messageText },
  target: messageSendFx,
});
