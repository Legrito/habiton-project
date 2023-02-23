import { useEffect, useState } from "react";
import moment from "moment";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setValue } from "../../features/counter/counterSlice";
import CalendarHeader from './CalendarHeader';
import Month from "./Month";
import Weekdays from "./Weekdays";
import Counter from '../Counter';

const Calendar = () => {
  const [date, setDate] = useState(moment().clone());
  const dispatch = useAppDispatch();
  const passedDays = useAppSelector((state) => state.counter.value);

  useEffect(() => {
    if(localStorage.getItem('counter') !== null) {
      const counter = Number(localStorage.getItem('counter'));
      dispatch(setValue(counter));
    }
  }, []);

  const handleNextMonth = () => {
    setDate(date.clone().add(1, 'months'));
  };

  const handlePrevMonth = () => {
    setDate(date.clone().subtract(1, 'months'));
  };

  return (
    <>
      <Counter />
      <CalendarHeader next={handleNextMonth} prev={handlePrevMonth} monthName={date.format('MMMM, YY')} />
      <div>
        <Weekdays />
        <Month monthName={date.format('MMMM')} />
      </div>
    </>
  );
};

export default Calendar;
