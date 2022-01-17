import { createSlice } from "@reduxjs/toolkit";
import { ERROR_MESSAGE } from "../../../utils/constants";

const initialState = {
  isLoading: false,
  resultMessage: "",
  errorMessage: "",
  isDeleting: false,
  isFailed: false,
  isSearchLoading: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    fetchStarted: (state) => {
      state.errorMessage = "";
      state.resultMessage = "";
      state.isFailed = false;
      state.isLoading = true;
    },
    fetchSuccess: (state, action) => {
      state.isLoading = false;
      state.resultMessage = action.payload;
    },
    fetchFailed: (state, action) => {
      state.isLoading = false;
      state.resultMessage = action.payload;
      state.errorMessage = ERROR_MESSAGE;
      state.isFailed = true;
    },
    toggleIsDeleting: (state) => {
      state.isDeleting = !state.isDeleting;
    },
    toggleSearchLoading: (state) => {
      state.isSearchLoading = !state.isSearchLoading;
    },
  },
});

export const {
  fetchStarted,
  fetchSuccess,
  fetchFailed,
  toggleIsDeleting,
  toggleSearchLoading
} = generalSlice.actions;

export default generalSlice.reducer;
