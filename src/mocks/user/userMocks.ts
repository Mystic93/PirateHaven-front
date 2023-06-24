import {
  UserStateStructure,
  UserTokenStructure,
  UserWithoutTokenStructure,
} from "../../store/user/types";
import { UserCredentials } from "../../store/user/types";

export const emptyUserStateMock: UserStateStructure = {
  name: "",
  id: "",
  token: "",
  isLogged: false,
};

export const userTokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkFicmFtb3YifQ.OnIyePcRifgCBhhYluSgwoNQzaKeDEVSv_nHp0_ldh8";

export const userWithTokenMock: UserTokenStructure = {
  name: "Antonio",
  id: "1",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkFudG9uaW8ifQ.9c6hu7ui5NBPtvpusTJNk5t8Y_xRWTiteB_qiniJAy4",
};

export const userWithoutTokenMock: UserWithoutTokenStructure = {
  name: "Antonio",
  id: "1",
};

export const loggedUserMock: UserStateStructure = {
  ...userWithTokenMock,
  isLogged: true,
};

export const userLoginDataMock: UserCredentials = {
  username: "jordi",
  password: "jordi",
};
