import { useEffect } from "react";
import { HABITONED_DAYS } from "../constants";
import { useAppStore } from "../store/useAppStore";
import ProgressRing from "./ProgressRing";

import "./Counter.scss";

const Counter = () => {
  const passedDaysArr = useAppStore(state => state.passedDays);
  const setPassedDays = useAppStore(state => state.setPassedDays);

  useEffect(() => {
    const counterString = localStorage.getItem(HABITONED_DAYS);

    if (counterString !== null) {
      const counter = JSON.parse(counterString);
      setPassedDays(counter);
    }
  }, [setPassedDays]);

  useEffect(() => {
    if (passedDaysArr.length > 0) {
      localStorage.setItem(HABITONED_DAYS, JSON.stringify(passedDaysArr));
    }
  }, [passedDaysArr]);

  return (
    <div className="habiton-counter-wrap">
      <ProgressRing
        value={passedDaysArr.length}
        maxValue={21}
        label={`${passedDaysArr.length} days`}
      />
    </div>
  );
};

export default Counter;
