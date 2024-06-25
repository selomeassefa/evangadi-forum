import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.innerWrapper}>
        <div className={styles.social}>
          <div className={styles.logo}>
            <img src="evangadi-logo-black.png" alt="evangadi logo" />
          </div>

          <div className={styles.icons}>
            <a href="#">
              <FiFacebook />
            </a>
            <a href="#">
              <FiInstagram />
            </a>
            <a href="#">
              <FiYoutube />
            </a>
          </div>
        </div>
        <div className={styles.link}>
          <h6>Useful Link</h6>
          <ul>
            <li>
              <Link to="/">How it works</Link>
            </li>
            <li>
              <Link to="/">Terms of Service</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className={styles.link}>
          <h6>Contact Info</h6>
          <ul>
            <li>
              <a href="/">Evangadi Networks</a>
            </li>
            <li>
              <a href="/">support@evangadi.com</a>
            </li>
            <li>
              <a href="/">+1-202-386-2702</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
