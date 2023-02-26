import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setValue } from "../features/counter/counterSlice";
import {
  CircularProgressbarWithChildren
} from "react-circular-progressbar";

import 'react-circular-progressbar/dist/styles.css';

import "./Counter.scss";

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
    <div className="habiton-counter-wrap">
      <CircularProgressbarWithChildren
        value={passedDays}
        maxValue={21}
      >
        <span className="habiton-counter-text">{passedDays} days</span>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default Counter;
