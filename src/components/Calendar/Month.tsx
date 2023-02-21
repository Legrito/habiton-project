import moment from "moment";
import Week from "./Week";

import { getDaysArrayByMonth } from "./helpers";

interface Props {
  date: moment.Moment;
}

const Month = ({ date }: Props) => {
  const monthDays = getDaysArrayByMonth("March");
  // const getNumberOfWeeksInMonth = (currentDate: moment.Moment): number => {
  //   const startWeek = currentDate.startOf("month").isoWeek();
  //   const endWeek = currentDate.endOf("month").isoWeek();
  //   return endWeek - startWeek + 1;
  // };

  // const weeksAmount: number[] = new Array(
  //   getNumberOfWeeksInMonth(date)
  // ).fill(5, 0);

  return (
    <div>
      {monthDays.map((week, idx) => <Week weekDays={week} key={idx} />)}
    </div>
  );
};

export default Month;
