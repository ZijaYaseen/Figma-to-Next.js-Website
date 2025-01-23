import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"  // hm defaul export me koi bhi naam de skte hen export kaa .. hm ne cartSlice file se cartSlice.reducer yhn import kia he.

const store = configureStore(
    {
        reducer: {
            cart : cartReducer,
        },
    }
);

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export default store;