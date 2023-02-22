import { Moment } from 'moment';
import Week from "./Week";

interface Props {
  monthDays: (Moment | null)[][];
}

const Month = ({ monthDays }: Props) => (
  <div>
    {monthDays.map((week, idx) => (
      <Week weekDays={week} key={idx} />
    ))}
  </div>
);

export default Month;
