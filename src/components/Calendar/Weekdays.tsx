import styles from "./Weekdays.module.scss";

const weekdays: string[] = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const Weekdays = () => (
  <div className={styles.weekdays}>
    {weekdays.map((day, idx) => (
      <div key={idx} className={styles.weekday}>{day}</div>
    ))}
  </div>
);

export default Weekdays;
