import { createSlice } from "@reduxjs/toolkit";
import API from "../../../service/index";

import {
  fetchStarted,
  fetchFailed,
  fetchSuccess,
  toggleIsDeleting,
} from "../general/generalSlice";

const initialState = {
  characters: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    deleteCharacter: (state, action) => {
      state.characters = state.characters.filter(
        (character) => action.payload !== character.name
      );
    },
  },
});

export const { setCharacters, deleteCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;

export const fetchCharacters = () => {
  return async (dispatch) => {
    dispatch(fetchStarted());
    try {
      const response = await API.characters.getCharacters();
      dispatch(setCharacters(response.results));
      dispatch(fetchSuccess(response));
    } catch (e) {
      dispatch(fetchFailed(e.toString()));
    }
  };
};

export const emulateServerDeleteRequest = (name) => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(fetchStarted());
      dispatch(toggleIsDeleting());
      dispatch(deleteCharacter(name));
      dispatch(fetchSuccess());
    }, 750);
    dispatch(toggleIsDeleting());
  };
};
