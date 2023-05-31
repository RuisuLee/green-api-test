import { createEffect, createEvent, createStore, sample } from "effector";
import { ILoginForm } from "../types/LoginForm";

export const getCreds = () => {
  const id = localStorage.getItem("id") || "";
  const apiToken = localStorage.getItem("apiToken") || "";
  return {
    id,
    apiToken,
  };
};

const defaultLoginForm: ILoginForm = getCreds();

const sendLoginFormFx = createEffect((params: ILoginForm) => {
  console.log(params);
  localStorage.setItem("id", params.id);
  localStorage.setItem("apiToken", params.apiToken);
});

export const submittedLoginForm = createEvent<any>();

export const setLoginFormField = createEvent<any>();
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
  //fn: (sourceState, clockParams) => transformedData
});
