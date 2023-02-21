import styles from './Weekdays.module.scss';

const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const Weekdays = () => (
  <div className={styles.weekdays}>
    {weekdays.map(day => (
      <div className={styles.weekday}>{day}</div>
    ))}
  </div>
);

export default Weekdays;
