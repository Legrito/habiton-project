import { configureStore, Middleware } from "@reduxjs/toolkit";
import counterReducer, { setValue } from "../features/counter/counterSlice";
import modalReducer, { modalToggled } from "../features/modal/modalSlice";

const habitSuccess: Middleware = store => next => action => {
  const { counter } = store.getState();

  if (action.type === "counter/incremented" && counter.value.length >= 20) {
    store.dispatch(setValue([]));
    return next(modalToggled());
  }
  return next(action);
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(habitSuccess),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
