import moment, { Moment } from "moment";
import Month from "./Month";
import Week from "./Week";

const weekDays: number[] = [0, 1, 2, 3, 4, 5, 6];

const Calendar = () => {
  const date = moment().month('March');
  //const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];



  return (
    <div>
      {/* <Week weekDays={weekdays} /> */}
      <Month date={date} />
    </div>
  );
};

export default Calendar;
