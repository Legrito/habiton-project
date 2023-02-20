import moment, { Moment } from "moment";
import { reduceEachLeadingCommentRange } from "typescript";
import Month from "./Month";
import Week from "./Week";

const weekDays: number[] = [0, 1, 2, 3, 4, 5, 6];

const Calendar = () => {
  const date = moment();
  const weekdays = moment.weekdaysMin();

  const getNumberOfWeeksInMonth = (date: moment.Moment): number => {
    const startWeek = date.startOf("month").isoWeek();
    const endWeek = date.endOf("month").isoWeek();
    return endWeek - startWeek + 1;
  };

  const getMonthDays = (date: moment.Moment) => {
    const daysInMonth: number = date.daysInMonth();
    const days: moment.Moment[] = [];

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(date.date(i));
      console.log(days);
    }

    return days;
  };

  const getNormalizedMonthDaysList = (
    date: moment.Moment,
    days: moment.Moment[]
  ) => {
    const monthDays = [...days];
    const startWeek = date.startOf("month").isoWeekday();
    const endWeek = date.endOf("month").isoWeekday();
    const startMonth = new Array(startWeek - 1);
    const endMonth = new Array(7 - endWeek);

    monthDays.unshift(...startMonth.fill(null));

    if (endMonth.length > 0) {
      return [...monthDays, ...endMonth.fill(null)];
    }

    return monthDays;
  };

  const getDaysArrayByMonth = (date: moment.Moment) => {
    let arrDays: (moment.Moment | null)[][] = [];
    let week: (moment.Moment | null)[] = [];
    const normalizedDays = getNormalizedMonthDaysList(date, getMonthDays(date));


    console.log(normalizedDays);

    for (let i = 0; i < normalizedDays.length; i++) {
      if (i % 7 !== 0) {
        week.push(normalizedDays[i]);
      } else {
        week.push(normalizedDays[i]);
        arrDays.push(week);
        week = [];
      }
    }

    return arrDays;
  };

  console.log(getDaysArrayByMonth(date));

  return (
    <div>
      <Week weekDays={weekdays} />
      <Month date={date} />
    </div>
  );
};

export default Calendar;
