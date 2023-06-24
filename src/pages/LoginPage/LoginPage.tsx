import { useNavigate } from "react-router";
import LoginForm from "../../components/LoginForm/LoginForm";
import useToken from "../../hooks/useToken/useToken";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch } from "../../store";
import { UserCredentials } from "../../store/user/types";
import { loginUserActionCreator } from "../../store/user/userSlice";
import LoginPageStyled from "./LoginPageStyled";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const { setToken } = useLocalStorage();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLoginFormSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);

    if (token) {
      setToken("token", token);
      const userSessionData = getTokenData(token);

      dispatch(loginUserActionCreator({ ...userSessionData, token }));
      navigate("/pirates", { replace: true });
    }

    return token;
  };

  return (
    <LoginPageStyled>
      <h1 className="login-title">Login</h1>
      <LoginForm submitForm={handleLoginFormSubmit} />
    </LoginPageStyled>
  );
};

export default LoginPage;
