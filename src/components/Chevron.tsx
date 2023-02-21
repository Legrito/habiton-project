import styles from './Chevron.module.scss';

interface Props {
  position: "right" | "left";
}

const Chevron = ({ position }: Props) => <span className={`${styles.chevron} ${styles[position]}`} />;

export default Chevron;
