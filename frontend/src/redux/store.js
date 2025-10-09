import { configureStore } from "@reduxjs/toolkit";
import userStore from "./Client/auth.store"
import productStore from "./Client/product.store"
import sidebarStore from "./Client/sideBar.store"
import wishlistStore from "./Client/wishlist.store"
import cartStore from "./Client/cart.store"
import shippingCart from "./Client/shipping.store"
import checkoutSlice from "./Client/checkout.store"

export const store = configureStore({
  reducer: {
     auth: userStore,
     product:productStore,
     sidebar:sidebarStore,
     wishlist:wishlistStore,
     cart:cartStore,
     shipping:shippingCart,
     checkout:checkoutSlice
  },
});
