import { fork } from "effector";
import { $loginForm, setLoginFormField } from "../../models/login";

describe("Login flow", () => {
  test("should set id and apiToken after login form completed", async () => {
    const scope = fork();

    setLoginFormField({ key: "id", value: "999" });
    setLoginFormField({ key: "apiToken", value: "some-test-token" });

    const creds = scope.getState($loginForm);

    expect(creds.id).toBe("999");
    expect(creds.apiToken).toBe("some-test-token");
  });
});
