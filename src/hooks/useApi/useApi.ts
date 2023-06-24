import { useCallback } from "react";
import { PirateStructure } from "../../store/pirate/types";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useApi = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.users);

  const getPirates = useCallback(async (): Promise<
    PirateStructure[] | undefined
  > => {
    try {
      dispatch(showLoadingActionCreator());
      const { data: pirates } = await axios.get<PirateStructure[]>(
        `${apiUrl}/pirates`
      );

      dispatch(hideLoaderActionCreator());

      return pirates;
    } catch (error) {
      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: "Unable to load pirates",
        })
      );
    }
  }, [dispatch]);

  const removePirate = async (
    idPirate: string
  ): Promise<number | undefined> => {
    try {
      dispatch(showLoadingActionCreator());
      const { status } = await axios.delete(`${apiUrl}/pirates/${idPirate}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: false,
          message: "Pirate succesfully deleted",
        })
      );

      return status;
    } catch (error) {
      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: "Unable to delete pirate",
        })
      );
    }
  };

  const createPirate = async (pirate: PirateStructure) => {
    try {
      dispatch(showLoadingActionCreator());

      const { data: pirates } = await axios.post(
        `${apiUrl}/pirates/create`,
        pirate,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(hideLoaderActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: false,
          message: "Pirate succesfully created",
        })
      );

      return pirates;
    } catch (error) {
      dispatch(hideLoaderActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: "Unable to create pirate",
        })
      );
    }
  };

  return { getPirates, removePirate, createPirate };
};

export default useApi;
