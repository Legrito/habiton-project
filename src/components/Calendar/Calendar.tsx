import moment from "moment";
import Month from "./Month";
import Week from "./Week";

const Calendar = () => {
  const date = moment();
  const weekdays = moment.weekdaysMin();

  console.log(date.weekday(1));

  return (
  <div>
    Calendar
    <Week weekDays={weekdays}/>
    <Week />
    <Week />
    <Week />
    <Month />
  </div>
)};

export default Calendar;
