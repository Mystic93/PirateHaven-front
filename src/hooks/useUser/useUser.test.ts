import { renderHook } from "@testing-library/react";
import { userLoginDataMock, userTokenMock } from "../../mocks/user/userMocks";
import useUser from "./useUser";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { UserCredentials } from "../../store/user/types";
import { wrapWithProviders } from "../../utils/testUtils";

describe("Given a getUserToken function", () => {
  const expectedToken = userTokenMock;
  describe("When called with username 'jordi' and password 'jordi'", () => {
    test("Then it should return a user token", async () => {
      const user = userLoginDataMock;

      const { result } = renderHook(() => useUser(), {
        wrapper: wrapWithProviders,
      });
      const { getUserToken } = result.current;
      const token = await getUserToken(user);

      expect(token).toBe(expectedToken);
    });
  });

  describe("When the getUserToken function is invoked with valid username and wrong password", () => {
    test("Then it should return the response's method status with a '401' status code", async () => {
      server.resetHandlers(...errorHandlers);

      const invalidUser: UserCredentials = {
        username: "jordi",
        password: "jose",
      };

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapWithProviders });

      const getToken = await getUserToken(invalidUser);

      expect(getToken).toBeUndefined();
    });
  });
});
