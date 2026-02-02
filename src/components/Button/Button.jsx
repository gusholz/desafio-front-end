import styles from "./Button.module.css";

export default function Button({
  text,
  onClick,
  variant = "primary",
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]}`}
    >
      {text}
    </button>
  );
}
