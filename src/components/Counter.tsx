import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/app/hooks";
import { setValue } from "../redux/features/counter/counterSlice";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { HABITONED_DAYS } from "../constants";

import "react-circular-progressbar/dist/styles.css";

import "./Counter.scss";

const Counter = () => {
  const dispatch = useAppDispatch();
  const passedDaysArr = useAppSelector(state => state.counter.value);

  useEffect(() => {
    const counterString = localStorage.getItem(HABITONED_DAYS);

    if (counterString !== null) {
      const counter = JSON.parse(counterString);
      dispatch(setValue(counter));
    }
  }, []);

  useEffect(() => {
    if (passedDaysArr.length > 0) {
      localStorage.setItem(HABITONED_DAYS, JSON.stringify(passedDaysArr));
    }
  }, [passedDaysArr]);

  return (
    <div className="habiton-counter-wrap">
      <CircularProgressbarWithChildren
        value={passedDaysArr.length}
        maxValue={21}
      >
        <span className="habiton-counter-text">
          {passedDaysArr.length} days
        </span>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default Counter;
