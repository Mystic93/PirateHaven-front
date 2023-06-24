export interface UserTokenStructure {
  name: string;
  id: string;
  token: string;
}

export interface UserWithoutTokenStructure {
  name: string;
  id: string;
}

export interface UserStateStructure extends UserTokenStructure {
  isLogged?: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}
