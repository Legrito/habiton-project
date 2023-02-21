import moment, { Moment } from "moment";
import Month from "./Month";
import Weekdays from "./Weekdays";

const weekDays: number[] = [0, 1, 2, 3, 4, 5, 6];

const Calendar = () => {
  var oneDate = moment();
  var monthName = oneDate.format("MMMM");
  const date = moment().month("March");

  return (
    <div>
      <Weekdays />
      <Month date={date} />
    </div>
  );
};

export default Calendar;
