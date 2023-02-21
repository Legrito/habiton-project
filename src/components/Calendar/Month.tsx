import moment from "moment";
import Week from "./Week";

import { getDaysArrayByMonth } from "./helpers";

interface Props {
  date: moment.Moment;
}

const Month = ({ date }: Props) => {
  const monthDays = getDaysArrayByMonth("March");

  return (
    <div>
      {monthDays.map((week, idx) => <Week weekDays={week} key={idx} />)}
    </div>
  );
};

export default Month;
