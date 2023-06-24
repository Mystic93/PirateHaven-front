import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PirateStructure } from "./types";

const initialPiratesState: PirateStructure[] = [];

const piratesSlice = createSlice({
  name: "pirates",
  initialState: initialPiratesState,
  reducers: {
    loadPirates: (
      _currentPiratesState: PirateStructure[],
      action: PayloadAction<PirateStructure[]>
    ) => action.payload,

    removePirate: (currentPiratesState, action: PayloadAction<string>) => {
      return currentPiratesState.filter(
        (pirate) => pirate.id !== action.payload
      );
    },

    createPirate: (
      currentPiratesState: PirateStructure[],
      action: PayloadAction<PirateStructure>
    ) => [...currentPiratesState, action.payload],
  },
});

export const {
  loadPirates: loadPiratesActionCreator,
  removePirate: removePirateActionCreator,
  createPirate: createPirateActionCreator,
} = piratesSlice.actions;
export const piratesReducer = piratesSlice.reducer;
