import moment, { Moment } from "moment";
import Icon from "./Icon";
import { useAppStore } from "../../store/useAppStore";
import styles from "./Day.module.scss";

interface Props {
  day: Moment | null;
}

const Day = ({ day }: Props) => {
  const addPassedDay = useAppStore(state => state.addPassedDay);

  if (day === null) {
    return <span className={`${styles.day} ${styles["day--empty"]}`} />;
  }

  const stringDay = day.format("DD MMMM YYYY");
  const passedDays = useAppStore(state => state.passedDays);
  const isChecked = passedDays.includes(stringDay);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.currentTarget.dataset.aviable === "false") {
      return null;
    } else {
      addPassedDay(stringDay);
    }
  };
  return (
    <>
      <button
        disabled={isChecked}
        type="button"
        onClick={handleClick}
        data-aviable={`${moment().isSameOrAfter(day, "day")}`}
        className={`${styles.day} ${
          day.isSame(new Date(), "day") ? styles.today : ""
        }`}
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
