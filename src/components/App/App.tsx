import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import Layout from "../Layout/Layout";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { useNavigate } from "react-router";

const App = (): React.ReactElement => {
  const { getToken } = useLocalStorage();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken("token");

    if (token) {
      const userData = getTokenData(token);

      dispatch(loginUserActionCreator({ ...userData, token }));

      navigate("/");
    }
  }, [getToken, getTokenData, dispatch, navigate]);

  return <Layout />;
};

export default App;
