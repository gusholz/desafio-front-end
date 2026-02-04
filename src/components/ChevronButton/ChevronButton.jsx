import styles from "./ChevronButton.module.css";
import chevronIcon from "../../assets/icons/chevron.svg";

export default function ChevronButton({ isFlipped, action, isDisabled }) {
  return (
    <button
      type="button"
      onClick={action}
      disabled={isDisabled}
      className={`${styles.chevronButton} ${isDisabled ? styles.disabled : ""}`}
      aria-disabled={isDisabled}
    >
      <img
        src={chevronIcon}
        alt=""
        aria-hidden="true"
        className={`${styles.chevron} ${isFlipped ? styles.flipped : ""}`}
      />
    </button>
  );
}
