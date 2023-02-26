import { configureStore, Middleware } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const loggerMiddleware: Middleware = storeAPI => next => action => {
  console.log('dispatching', action);
  console.log('next state', storeAPI.getState());
  return next(action);
}

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
