import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FeedbackPayloadStructure, UiStateStructure } from "./types";

export const initialState: UiStateStructure = {
  isLoading: false,
  showFeedback: false,
  isError: false,
  message: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showLoading: (currentState: UiStateStructure) => ({
      ...currentState,
      isLoading: true,
    }),
    hideLoader: (currentState: UiStateStructure) => ({
      ...currentState,
      isLoading: false,
    }),

    showFeedback: (
      currentState: UiStateStructure,
      action: PayloadAction<FeedbackPayloadStructure>
    ): UiStateStructure => ({
      ...currentState,
      showFeedback: true,
      isError: action.payload.isError,
      message: action.payload.message,
    }),
    hideFeedback: (): UiStateStructure => ({
      ...initialState,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoader: hideLoaderActionCreator,
  showFeedback: showFeedbackActionCreator,
  hideFeedback: hideFeedbackActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
