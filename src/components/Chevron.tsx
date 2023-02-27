import styles from "./Chevron.module.scss";

interface Props {
  position: "right" | "left";
  onClick: () => void;
  name: "previous month" | "next month";
}

const Chevron = ({ position, name, onClick }: Props) => (
  <button type="button" name={name} className={styles.button} onClick={onClick}>
    <span className={`${styles.chevron} ${styles[position]}`} />
  </button>
);

export default Chevron;
