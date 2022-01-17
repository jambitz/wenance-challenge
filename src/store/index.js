import { configureStore } from '@reduxjs/toolkit';
import characters from './slices/characters/charactersSlice';
import general from "./slices/general/generalSlice";

export const store = configureStore({
  reducer: {
    characters: characters,
    general: general,
  },
});
