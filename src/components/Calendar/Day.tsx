import { useEffect, useState } from "react";
import moment, { Moment } from "moment";
import { useAppDispatch } from "../../redux/app/hooks";
import { incremented } from "../../redux/features/counter/counterSlice";
import Icon from "./Icon";
import { HABITONED_DAYS } from "../../constants";
import styles from "./Day.module.scss";

interface Props {
  day: Moment | null;
}

const Day = ({ day }: Props) => {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const checkedDays = localStorage.getItem(HABITONED_DAYS);

    if (checkedDays !== null && checkedDays.length > 0 && day !== null) {
      const isCheckedDays = JSON.parse(checkedDays);

      if (isCheckedDays.includes(day.format("DD MMMM YYYY"))) {
        setIsChecked(true);
      }
    }
  }, [day]);

  if (day === null) {
    return <span className={`${styles.day} ${styles["day--empty"]}`} />;
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const stringDay = day.format("DD MMMM YYYY");

    if (e.currentTarget.dataset.aviable === "false") {
      return null;
    } else {
      dispatch(incremented(stringDay));
      setIsChecked(prev => !prev);
    }
  };
  return (
    <>
      <button
        disabled={isChecked}
        type="button"
        onClick={handleClick}
        data-aviable={`${moment().isSameOrAfter(day, "day")}`}
        className={`${styles.day} ${day.isSame(new Date(), "day") ? styles.today : ""}`}
      >
        {day.date()}
        {isChecked && (
          <div className={styles.icon}>
            <Icon />
          </div>
        )}
      </button>
    </>
  );
};

export default Day;
