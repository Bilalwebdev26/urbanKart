import { configureStore } from "@reduxjs/toolkit";
import userStore from "./Client/auth.store"

export const store = configureStore({
  reducer: {
     auth: userStore,
  },
});
