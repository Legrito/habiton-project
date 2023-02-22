import { Moment } from "moment";
import styles from "./Day.module.scss";

interface Props {
  day: Moment | null;
}

const Day = ({ day }: Props) => {
  if (day === null) {
    return <span className={`${styles.day} ${styles['day--empty']}`}/>;
  }

  return <div className={`${styles.day} ${day.isSame(new Date(), 'day') ? styles.today : ''}`}>{day.date()}</div>;
};

export default Day;
