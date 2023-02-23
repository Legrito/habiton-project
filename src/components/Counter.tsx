import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setValue } from "../features/counter/counterSlice";

const Counter = () => {
  const dispatch = useAppDispatch();
  const passedDays = useAppSelector(state => state.counter.value);

  useEffect(() => {
    if (localStorage.getItem("counter") !== null) {
      const counter = Number(localStorage.getItem("counter"));
      dispatch(setValue(counter));
    }
  }, []);

  useEffect(() => {
    if (passedDays > 0) {
      localStorage.setItem("counter", JSON.stringify(passedDays));
    }
  }, [passedDays]);

  return (
    <div>
      <span>{passedDays}</span>
    </div>
  );
};

export default Counter;
