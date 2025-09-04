import { configureStore } from "@reduxjs/toolkit";
import userStore from "./Client/auth.store"
import productStore from "./Client/product.store"

export const store = configureStore({
  reducer: {
     auth: userStore,
     product:productStore
  },
});
