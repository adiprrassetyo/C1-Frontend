import { configureStore } from "@reduxjs/toolkit";
import authReduces from "./slices/authSlice";

export default configureStore({
  reducer: {
    auth: authReduces,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
