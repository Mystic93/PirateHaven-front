import axios from "axios";
import { UserCredentials } from "../../store/user/types";
import { useCallback } from "react";
import { useAppDispatch } from "../../store";
import {
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const dispatch = useAppDispatch();

  const getUserToken = useCallback(
    async (userCredentials: UserCredentials): Promise<string | undefined> => {
      try {
        dispatch(showLoadingActionCreator());
        const { data } = await axios.post<{ token: string }>(
          `${apiUrl}/user/login`,
          userCredentials
        );

        dispatch(hideLoaderActionCreator());

        return data.token;
      } catch (error) {
        dispatch(hideLoaderActionCreator());
        dispatch(
          showFeedbackActionCreator({
            isError: true,
            message: "Wrong credential",
          })
        );
      }
    },
    [dispatch]
  );

  return {
    getUserToken,
  };
};

export default useUser;
