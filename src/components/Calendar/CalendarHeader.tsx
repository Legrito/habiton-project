import Chevron from "../Chevron";
import styles from "./CalendarHeader.module.scss";

interface Props {
  monthName: string;
  next: () => void;
  prev: () => void;
}

const CalendarHeader = ({ monthName, next, prev }: Props) => (
  <div className={styles.header}>
    <Chevron name="previous month" position="left" onClick={prev} />
    <h1>{monthName}</h1>
    <Chevron name="next month" position="right" onClick={next} />
  </div>
);

export default CalendarHeader;
