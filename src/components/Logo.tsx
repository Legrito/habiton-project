import styles from "./Logo.module.scss";

interface Props {
    size?: "24" | "78"
}

const Logo = ({ size = "24" }: Props) => (<p className={`${styles.logo} ${styles[`size-${size}`]}`}>HabitOn</p>);

export default Logo;
