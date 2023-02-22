import moment, { Moment } from "moment";
import Month from "./Month";
import Weekdays from "./Weekdays";
import { getDaysArrayByMonth } from './helpers';

const weekDays: number[] = [0, 1, 2, 3, 4, 5, 6];

const Calendar = () => {
  const currentDate = moment();
  // var monthName = oneDate.format("MMMM");
  // const date = moment().month("March");
  const monthDays = getDaysArrayByMonth(currentDate.format('MMMM'));

  return (
    <div>
      <Weekdays />
      <Month monthDays={monthDays} />
    </div>
  );
};

export default Calendar;
