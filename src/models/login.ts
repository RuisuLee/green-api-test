import { createEffect, createEvent, createStore, sample } from "effector";
import { ILoginForm } from "../types/LoginForm";

const defaultLoginForm: ILoginForm = {
  id: "",
  apiToken: "",
};

const sendLoginFormFx = createEffect((params: ILoginForm) => {
  console.log(params);
});
export const submittedLoginForm = createEvent<any>();
submittedLoginForm.watch((e) => {
  e.preventDefault();
});
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
