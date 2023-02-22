import { Moment } from "moment";
import Day from "./Day";
import styles from './Week.module.scss';

// const arr: string[] = ['1', '2', '3', '4', '5', '6', '7'];

interface Props {
  weekDays: (Moment | null)[];
}

const Week = ({ weekDays }: Props) => {
  return (
  <div className={styles.wrap}>
    {weekDays.map((day, idx) => <Day key={idx} day={day} />)}
  </div>
)};

export default Week;
