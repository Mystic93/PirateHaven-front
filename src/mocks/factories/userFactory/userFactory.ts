import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { UserCredentials, UserStateStructure } from "../../../store/user/types";

const userFactory = Factory.define<UserStateStructure>(() => ({
  id: faker.database.mongodbObjectId().toString(),
  name: faker.person.firstName(),
  token: faker.string.alphanumeric(20),
  isLogged: false,
}));

export const getUserDataMock = (
  isItLogged?: boolean,
  data?: UserStateStructure
) => {
  const userData = userFactory.build(data);

  if (isItLogged) {
    return userData;
  } else {
    delete userData.isLogged;
    return userData;
  }
};

const userCredentialsFactory = Factory.define<UserCredentials>(() => ({
  username: faker.internet.userName(),
  password: faker.string.alphanumeric(10),
}));

export const getUserCredentialsMock = (data?: UserCredentials) => {
  return userCredentialsFactory.build(data);
};
