import { renderHook } from "@testing-library/react";
import {
  userWithTokenMock,
  userWithoutTokenMock,
} from "../../mocks/user/userMocks";
import useToken from "./useToken";

describe("Given a getTokenData function", () => {
  describe("When it receives a token", () => {
    test("Then it should return the id, name and token", () => {
      const token = userWithTokenMock.token;

      const { result } = renderHook(() => useToken());
      const { getTokenData } = result.current;

      const tokenData = getTokenData(token);

      expect(tokenData).toStrictEqual(userWithoutTokenMock);
    });
  });
});
