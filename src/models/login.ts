import { createEffect, createEvent, createStore, sample } from "effector";
import { ILoginForm } from "../types/LoginForm";
import { IField } from "../types/Field";

export const getCreds = (): ILoginForm => {
  const id = localStorage.getItem("id") || "";
  const apiToken = localStorage.getItem("apiToken") || "";
  return {
    id,
    apiToken,
  };
};

const defaultLoginForm: ILoginForm = getCreds();

export const sendLoginFormFx = createEffect((params: ILoginForm) => {
  localStorage.setItem("id", params.id);
  localStorage.setItem("apiToken", params.apiToken);
});

export const submittedLoginForm = createEvent();
export const setLoginFormField = createEvent<IField>();

export const $loginForm = createStore<ILoginForm>(defaultLoginForm).on(
  setLoginFormField,
  (s, { key, value }) => ({
    ...s,
    [key]: value,
  })
);

sample({
  clock: submittedLoginForm,
  source: $loginForm,
  target: sendLoginFormFx,
});
