import { Moment } from "moment";
import styles from "./Day.module.scss";

interface Props {
  day: string | Moment | null;
}

const Day = ({ day }: Props) => {
  if (day === null) {
    return <span className={`${styles.day} ${styles['day--empty']}`}/>;
  }

  return <div className={styles.day}>{typeof day === 'string' ? day : day?.date()}</div>;
};

export default Day;
