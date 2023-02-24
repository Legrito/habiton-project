import { Link } from "react-router-dom";
import styles from "./AppHeader.module.scss";
import { useSignOut } from "react-auth-kit";
import Logo from "./Logo";

const AppHeader = () => {
  const singOut = useSignOut();

  const handleSingOut = () => {
    singOut();
  };
  
  return (
  <div className={styles.header}>
    <Logo />
    <button className={styles.button} type="button" onClick={handleSingOut}>Sing Out</button>
  </div>
)};

export default AppHeader;
