import Chevron from "./Chevron";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.header}>
    <Chevron position="left" />
    <h1>March</h1>
    <Chevron position="right" />
  </div>
);

export default Header;
