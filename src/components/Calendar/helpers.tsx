import moment from 'moment';

export const getNumberOfWeeksInMonth = (date: moment.Moment): number => {
  const startWeek = date.startOf("month").isoWeek();
  const endWeek = date.endOf("month").isoWeek();
  return endWeek - startWeek + 1;
};

export const getMonthDays = (month: number) => {
  const currentMonthDates = new Array(moment().month(month).daysInMonth()).fill(null).map((x, i) => moment().month(month).startOf('month').add(i, 'days'));

  return currentMonthDates;
};

export const getNormalizedMonthDaysList = (currentDate: moment.Moment) => {
  const monthDays = [...getMonthDays(2)];
  const startWeek = currentDate.startOf("month").isoWeekday();
  const endWeek = currentDate.endOf("month").isoWeekday();
  const startMonth = new Array(startWeek - 1);
  const endMonth = new Array(7 - endWeek);

  monthDays.unshift(...startMonth.fill(null));

  if (endMonth.length > 0) {
    return [...monthDays, ...endMonth.fill(null)];
  }

  return monthDays;
};

export const getDaysArrayByMonth = (month: string) => {
  let currentDate = moment().month(month)
  let arrDays: (moment.Moment | null)[][] = [];
  let week: (moment.Moment | null)[] = [];
  const normalizedDays = getNormalizedMonthDaysList(currentDate);

  for (let i = 0; i <= normalizedDays.length; i++) {
    if (week.length < 6) {
      week.push(normalizedDays[i]);
    } else {
      week.push(normalizedDays[i]);
      console.log(week);
      arrDays.push(week);
      week = [];
    }
  }

  return arrDays;
};
