import Day from "./Day";
import styles from './Week.module.scss';

const arr: string[] = ['1', '2', '3', '4', '5', '6', '7'];

interface Props {
  weekDays?: string[]
}

const Week = ({ weekDays = arr }: Props) => {
  return (
  <div className={styles.wrap}>
    {weekDays.map(day => (<Day name={day} />))}
  </div>
)};

export default Week;
