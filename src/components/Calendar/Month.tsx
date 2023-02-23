import { Moment } from "moment";
import Week from "./Week";
import { getDaysArrayByMonth } from "./helpers";

interface Props {
  monthName: string;
}

const Month = ({ monthName }: Props) => {
  const monthDays = getDaysArrayByMonth(monthName);

  return (
    <div>
      {monthDays.map((week, idx) => (
        <Week weekDays={week} key={idx} />
      ))}
    </div>
  );
};

export default Month;
