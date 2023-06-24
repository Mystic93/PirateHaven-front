import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { UserCredentials } from "../../store/user/types";
import Button from "../Button/Button";

export interface LoginFormProps {
  submitForm: (userState: UserCredentials) => void;
}

const LoginForm = ({ submitForm }: LoginFormProps): React.ReactElement => {
  const initialUserCredentials: UserCredentials = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUserCredentials);

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const isFilled = userData.username !== "" && userData.password !== "";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    submitForm(userData);
    setUserData(initialUserCredentials);
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <label className="loginform-label" htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        className="loginform-input"
        id="username"
        autoComplete="off"
        onChange={onChangeInputs}
      />
      <label className="loginform-label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        className="loginform-input"
        id="password"
        autoComplete="off"
        onChange={onChangeInputs}
      />

      <Button
        type="submit"
        className="loginform-button"
        disabled={!isFilled}
        text="Login"
      />
    </LoginFormStyled>
  );
};

export default LoginForm;
