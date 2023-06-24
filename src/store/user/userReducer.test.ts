import {
  emptyUserStateMock,
  loggedUserMock,
  userWithTokenMock,
} from "../../mocks/user/userMocks";
import { UserStateStructure } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer reducer", () => {
  describe("When it receives an empty current state and a loginuser action with an user as payload", () => {
    test("Then it should return a new state with the logged user", () => {
      const currentUserState = emptyUserStateMock;
      const expectedNewUserState = loggedUserMock;

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(userWithTokenMock)
      );

      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });
});

describe("Given a logoutUser reducer", () => {
  describe("When it receives the user data", () => {
    test("Then it should return the same user with property isLogged false", () => {
      const user = emptyUserStateMock;
      const currentUserState: UserStateStructure = {
        ...user,
        isLogged: true,
      };

      const newUserLogoutState = userReducer(
        currentUserState,
        logoutUserActionCreator()
      );

      const expectedUserState: UserStateStructure = {
        ...user,
        isLogged: false,
      };

      expect(newUserLogoutState).toStrictEqual(expectedUserState);
    });
  });
});
