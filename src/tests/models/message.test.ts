import { allSettled, fork } from "effector";
import { $messages, messageLoadFx, messageSendFx } from "../../models/message";

describe("Recieve message flow", () => {
  test("should add message to the messages array when recieve", async () => {
    const testMessage = {
      text: "Test",
      type: "input",
      time: 1685684643,
    };
    const scope = fork({
      handlers: new Map([[messageLoadFx, jest.fn(() => testMessage)]]),
    });

    await allSettled(messageLoadFx, {
      params: {},
      scope,
    });

    const expectedMessages = [testMessage];

    expect(scope.getState($messages)).toStrictEqual(expectedMessages);
  });
});

describe("Send message flow", () => {
  test("should add message to the messages array when send", async () => {
    const testMessage = {
      text: "Test",
      type: "input",
      time: 1685684643,
    };
    const scope = fork({
      handlers: new Map([[messageSendFx, jest.fn(() => testMessage)]]),
    });

    await allSettled(messageSendFx, {
      params: {},
      scope,
    });

    const expectedMessages = [testMessage];

    expect(scope.getState($messages)).toStrictEqual(expectedMessages);
  });
});
