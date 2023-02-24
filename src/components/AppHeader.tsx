import { Link } from "react-router-dom";
import styles from "./AppHeader.module.scss";
import { useSignOut } from "react-auth-kit";

const AppHeader = () => {
  const singOut = useSignOut();

  const handleSingOut = () => {
    singOut();
  };
  
  return (
  <div className={styles.header}>
    <Link to="/">Home</Link>
    <Link to="login">Login</Link>
    <button type="button" onClick={handleSingOut}>Sing Out</button>
  </div>
)};

export default AppHeader;
