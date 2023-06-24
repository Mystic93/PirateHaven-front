import { FeedbackPayloadStructure, UiStateStructure } from "./types";
import {
  hideFeedbackActionCreator,
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading reducer", () => {
  describe("When it receives a current state set to false and a showLoading action with a new state", () => {
    test("Then it should return a new current state set to true", () => {
      const currentLoadingState: UiStateStructure = { isLoading: false };
      const expectedLoadingState: UiStateStructure = { isLoading: true };

      const action = showLoadingActionCreator();
      const newLoadingState = uiReducer(currentLoadingState, action);

      expect(newLoadingState).toStrictEqual(expectedLoadingState);
    });
  });
});

describe("Given a hideLoading reducer", () => {
  describe("When it receives a current state set to true and a hideLoading action with a new state", () => {
    test("Then it should return a new current state set to false", () => {
      const trueLoadingState: UiStateStructure = { isLoading: true };
      const falseLoadingState: UiStateStructure = { isLoading: false };

      const action = hideLoaderActionCreator();

      const newLoadingState = uiReducer(trueLoadingState, action);

      expect(newLoadingState).toStrictEqual(falseLoadingState);
    });
  });
});

describe("Given a showFeedback reducer", () => {
  describe("When it receive an Ui state and a show feedback action", () => {
    test("Then it should toggle the showFeedback Ui state to true", () => {
      const currentState: UiStateStructure = {
        isError: false,
        message: "",
        showFeedback: false,
      };

      const expectedState: UiStateStructure = {
        showFeedback: true,
        isError: true,
        message: "error",
      };

      const payload: FeedbackPayloadStructure = {
        isError: true,
        message: "error",
      };

      const uiState = uiReducer(
        currentState,
        showFeedbackActionCreator(payload)
      );

      expect(uiState).toStrictEqual(expectedState);
    });
  });
});

describe("Given a hideFeedback reducer", () => {
  describe("When it receive an Ui state and a hide feedback action", () => {
    test("Then it should toggle the showFeedback Ui state to false", () => {
      const currentState: UiStateStructure = {
        showFeedback: true,
        isError: true,
        message: " error",
      };

      const expectedState: UiStateStructure = {
        isLoading: false,
        showFeedback: false,
        isError: false,
        message: "",
      };

      const UiState = uiReducer(currentState, hideFeedbackActionCreator());

      expect(UiState).toStrictEqual(expectedState);
    });
  });
});
