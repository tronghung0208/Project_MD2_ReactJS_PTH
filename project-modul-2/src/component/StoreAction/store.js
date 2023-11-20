import { configureStore } from "@reduxjs/toolkit";
import action from "./action";

const store = configureStore({
  reducer: {
    users: action,
  },
});

export default store;
