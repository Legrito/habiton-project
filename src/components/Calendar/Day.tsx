import { Moment } from "moment";
import { useAppDispatch } from "../../app/hooks";
import { incremented } from "../../features/counter/counterSlice";
import styles from "./Day.module.scss";

interface Props {
  day: Moment | null;
}

const Day = ({ day }: Props) => {
  const dispatch = useAppDispatch();

  if (day === null) {
    return <span className={`${styles.day} ${styles["day--empty"]}`} />;
  }

  const handleClick = (e: any) => {
    e.preventDefault();

    dispatch(incremented());
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.day} ${
        day.isSame(new Date(), "day") ? styles.today : ""
      }`}
    >
      {day.date()}
    </button>
  );
};

export default Day;
