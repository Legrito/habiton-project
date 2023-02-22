import styles from "./Chevron.module.scss";

interface Props {
  position: "right" | "left";
  onClick: () => void;
}

const Chevron = ({ position, onClick }: Props) => (
  <button type="button" className={styles.button} onClick={onClick}>
    <span className={`${styles.chevron} ${styles[position]}`} />
  </button>
);

export default Chevron;
