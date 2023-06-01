import { createEffect, createEvent, createStore, sample } from "effector";
import { IPhoneNumber } from "../types/PhoneNumber";
import { IField } from "../types/Field";

export const getChatId = () => {
  return localStorage.getItem("chatId") || "";
};

const getPhone = () => {
  const chatId = localStorage.getItem("chatId");
  if (chatId) {
    return {
      number: chatId.slice(0, 11),
    };
  } else {
    return {
      number: "",
    };
  }
};

const defaultPhone: IPhoneNumber = getPhone();

const sendPhoneNumberFormFx = createEffect((params: IPhoneNumber) => {
  localStorage.setItem("chatId", `${params.number}@c.us`);
});

export const submittedPhoneNumberForm = createEvent();
export const setPhoneNumberField = createEvent<IField>();
export const $phone = createStore<IPhoneNumber>(defaultPhone).on(
  setPhoneNumberField,
  (s, { key, value }) => ({
    ...s,
    [key]: value,
  })
);

sample({
  clock: submittedPhoneNumberForm,
  source: $phone,
  target: sendPhoneNumberFormFx,
});
