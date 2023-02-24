import { useState } from "react";
import moment from "moment";
import CalendarHeader from "./CalendarHeader";
import Month from "./Month";
import Weekdays from "./Weekdays";

const Calendar = () => {
  const [date, setDate] = useState(moment().clone());

  const handleNextMonth = () => {
    setDate(date.clone().add(1, "months"));
  };

  const handlePrevMonth = () => {
    setDate(date.clone().subtract(1, "months"));
  };

  return (
    <div>
      <CalendarHeader
        next={handleNextMonth}
        prev={handlePrevMonth}
        monthName={date.format("MMMM, YY")}
      />
      <div>
        <Weekdays />
        <Month monthName={date.format("MMMM")} />
      </div>
    </div>
  );
};

export default Calendar;
