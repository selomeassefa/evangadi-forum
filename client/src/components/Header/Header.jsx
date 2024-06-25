import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { AppState } from "../../App";
import { useContext } from "react";

export default function Header() {
  const { user, setUser } = useContext(AppState);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img src="/evangadi-logo-black.png" alt="evangadi logo" />
        </Link>
        <div className={styles.menus}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">How It Works</Link>
            </li>
            {user?.username ? (
              <li className={styles.button} onClick={handleLogout}>
                Log Out
              </li>
            ) : (
              <li className={styles.button}>
                <Link to="/login">SIGN IN</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
