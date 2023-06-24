import {
  fullPiratesStateMock,
  newPirateMock,
} from "../../mocks/pirate/pirateMocks";
import {
  createPirateActionCreator,
  loadPiratesActionCreator,
  piratesReducer,
  removePirateActionCreator,
} from "./piratesSlice";
import { PirateStructure } from "./types";

describe("Given a piratesSlice reducer", () => {
  describe("When ti receives an empty state and a loadPirates action with 2 pirates", () => {
    test("Then it should return a new state with 2 pirates", () => {
      const currentEmptyPirateState: PirateStructure[] = [];

      const expectedPiratesState: PirateStructure[] = fullPiratesStateMock;

      const newPiratesState = piratesReducer(
        currentEmptyPirateState,
        loadPiratesActionCreator(fullPiratesStateMock)
      );

      expect(newPiratesState).toStrictEqual(expectedPiratesState);
    });
  });
});

describe("Given a removePirate reducer", () => {
  describe("When it receives a removePirate action and a current state with two pirates", () => {
    test("Then it should return a new state of the list with 1 pirate", () => {
      const currentPirateState: PirateStructure[] = fullPiratesStateMock;
      const id = fullPiratesStateMock[0].id;

      const removePirateAction = removePirateActionCreator(id as string);

      const newPirateState = piratesReducer(
        currentPirateState,
        removePirateAction
      );

      expect(newPirateState).toHaveLength(currentPirateState.length - 1);
    });
  });
});

describe("Given a createPirate reducer", () => {
  describe("When it receives a currentState with two pirates and a new pirate as payload", () => {
    test("Then it should a list with one more pirate", () => {
      const expectedPirateName = "buggy";

      const currentPirateState: PirateStructure[] = fullPiratesStateMock;

      const newUserPirate = newPirateMock;

      const createPirateAction = createPirateActionCreator(newUserPirate);

      const newPirateState = piratesReducer(
        currentPirateState,
        createPirateAction
      );

      expect(newPirateState).toHaveLength(3);

      expect(newPirateState[2].name).toBe(expectedPirateName);
    });
  });
});
