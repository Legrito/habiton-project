import moment from "moment";
import Week from "./Week";

interface Props {
  date: moment.Moment;
}

const Month = ({ date }: Props) => {
  const getNumberOfWeeksInMonth = (moment: moment.Moment): number => {
    const startWeek = moment.startOf("month").isoWeek();
    const endWeek = moment.endOf("month").isoWeek();
    return endWeek - startWeek + 1;
  };

  const weeksAmount: number[] = new Array(
    getNumberOfWeeksInMonth(date.month("Fabruary"))
  ).fill(5, 0);

  return (
    <div>
      {weeksAmount.map((_, idx) => <Week key={idx} />)}
    </div>
  );
};

export default Month;
