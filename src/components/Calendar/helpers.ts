import moment, { Moment } from "moment";

export const getNumberOfWeeksInMonth = (date: moment.Moment): number => {
  const startWeek = date.startOf("month").isoWeek();
  const endWeek = date.endOf("month").isoWeek();
  return endWeek - startWeek + 1;
};

export const getMonthDays = (month: string): Moment[] => {
  const currentMonthDates = new Array(moment().month(month).daysInMonth())
    .fill(null)
    .map((x, i) => moment().month(month).startOf("month").add(i, "days"));

  return currentMonthDates;
};

export const getNormalizedMonthDaysList = (
  currentMonth: string
): (Moment | null)[] => {
  const monthDays: (Moment | null)[] = [...getMonthDays(currentMonth)];
  const currentDate = moment().month(currentMonth);
  const startWeek = currentDate.startOf("month").isoWeekday();
  const endWeek = currentDate.endOf("month").isoWeekday();
  const startMonth: null[] = new Array(startWeek - 1).fill(null);
  const endMonth: null[] = new Array(7 - endWeek).fill(null);

  if (startMonth.length > 0) {
    monthDays.unshift(...startMonth);
  }

  if (endMonth.length > 0) {
    return [...monthDays, ...endMonth];
  }

  return monthDays;
};

export const getDaysArrayByMonth = (month: string) => {
  let currentDate = month
    ? moment().month(month).format("MMMM")
    : moment().format("MMMM");
  let arrDays: (Moment | null)[][] = [];
  let week: (Moment | null)[] = [];
  const normalizedDays = getNormalizedMonthDaysList(currentDate);

  for (let i = 0; i <= normalizedDays.length; i++) {
    if (week.length < 6) {
      week.push(normalizedDays[i]);
    } else {
      week.push(normalizedDays[i]);
      arrDays.push(week);
      week = [];
    }
  }

  return arrDays;
};
