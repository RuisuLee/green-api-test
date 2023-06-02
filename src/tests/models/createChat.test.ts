import { fork } from "effector";
import { $phone, setPhoneNumberField } from "../../models/phoneNumber";

describe("Create chat flow", () => {
  test("should set phone number after create chat form completed", async () => {
    const scope = fork();

    setPhoneNumberField({ key: "number", value: "71234567890" });

    const phone = scope.getState($phone);

    expect(phone.number).toBe("71234567890");
  });
});
