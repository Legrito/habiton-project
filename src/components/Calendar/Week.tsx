import Day from "./Day";
import styles from './Week.module.scss';

// const arr: string[] = ['1', '2', '3', '4', '5', '6', '7'];

interface Props {
  weekDays: (moment.Moment | null)[]
}

const Week = ({ weekDays }: Props) => {
  return (
  <div className={styles.wrap}>
    {weekDays.map(day => {
      if( day === null) {
        return null;
      }
    return <Day name={day?.date()} />})}
  </div>
)};

export default Week;
