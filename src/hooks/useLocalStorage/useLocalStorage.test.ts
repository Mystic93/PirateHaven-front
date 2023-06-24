import { renderHook } from "@testing-library/react";
import { userWithTokenMock } from "../../mocks/user/userMocks";
import useLocalStorage from "./useLocalStorage";

beforeEach(() => {
  localStorage.clear();
});

describe("Given a useLocalStorage custom hook", () => {
  const key = "token";
  describe("When the setToken function is invoked with a key 'token' and a value 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkFicmFtb3YifQ.OnIyePcRifgCBhhYluSgwoNQzaKeDEVSv_nHp0_ldh8'", () => {
    test("Then it should save the token in the local storage", () => {
      const value = userWithTokenMock.token;

      const {
        result: {
          current: { setToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);

      expect(localStorage.getItem(key)).toBe(value);
    });
  });
  describe("When the getToken function is invoked with a key 'token'", () => {
    test("Then it should get the token value", () => {
      const value = userWithTokenMock.token;

      localStorage.setItem(key, value);

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useLocalStorage());

      getToken(key);

      expect(localStorage.getItem(key)).toBe(value);
    });
  });

  describe("When the removeToken function is invoked with a valid key", () => {
    test("Then it should remove the token", () => {
      localStorage.removeItem(key);

      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useLocalStorage());

      removeToken(key);

      expect(localStorage.removeItem(key)).toBe(undefined);
    });
  });
});
