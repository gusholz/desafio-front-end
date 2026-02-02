import styles from "./ChevronButton.module.css";
import chevronIcon from "../../assets/icons/chevron.svg";

export default function ChevronButton({ isFlipped, action }) {
  return (
    <button type="button" onClick={action} className={styles.chevronButton}>
      <img
        src={chevronIcon}
        alt=""
        aria-hidden="true"
        className={`${styles.chevron} ${isFlipped ? styles.flipped : ""}`}
      />
    </button>
  );
}
