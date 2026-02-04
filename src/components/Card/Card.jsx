import styles from "./Card.module.css";

export default function Card({ iconSrc, mainText, subText }) {
  return (
    <div className={styles.card}>
      <img className={styles.icon} src={iconSrc}></img>
      <h1 className={styles.title}>{mainText}</h1>
      <h2 className={styles.subtitle}>{subText}</h2>
    </div>
  );
}
