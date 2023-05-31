import { createEffect, createEvent, createStore, sample } from "effector";
import { IPhoneNumber } from "../types/PhoneNumber";

const defaultPhone: IPhoneNumber = {
  number: "",
};

const sendPhoneNumberFormFx = createEffect((params: IPhoneNumber) => {
  console.log(params);
});
export const submittedPhoneNumberForm = createEvent<any>();
submittedPhoneNumberForm.watch((e) => {
  e.preventDefault();
});
export const setPhoneNumberField = createEvent<any>();
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
  //fn: (sourceState, clockParams) => transformedData
});
