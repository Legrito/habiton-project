import { Moment } from "moment";
import { useAppDispatch } from "../../app/hooks";
import { incremented } from "../../features/counter/counterSlice";
import Icon from "./Icon";
import styles from "./Day.module.scss";
import { useState } from "react";

interface Props {
  day: Moment | null;
}

const Day = ({ day }: Props) => {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(false);

  if (day === null) {
    return <span className={`${styles.day} ${styles["day--empty"]}`} />;
  }

  const handleClick = (e: any) => {
    e.preventDefault();

    dispatch(incremented());
    setIsChecked(prev => !prev);
  };
  return (
    <>
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.day} ${
        day.isSame(new Date(), "day") ? styles.today : ""
      }`}
    >
      {day.date()}
      {isChecked && <div className={styles.icon}><Icon /></div>}
    </button>
    </>
  );
};

export default Day;
