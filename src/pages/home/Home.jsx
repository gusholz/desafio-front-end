import Button from "../../components/Button/Button";
import mockImage from "../../assets/images/mockImage.png";
import playIcon from "../../assets/images/play.svg";
import styles from "./Home.module.css";

export default function FirstFold() {
  return (
    <section className={styles.firstFold}>
      <div className={styles.decorativeCircle} aria-hidden="true" />

      <div className={styles.content}>
        <h1 className={styles.title}>Quanto custa a contabilidade em 2026?</h1>

        <p className={styles.description}>
          Descubra os preços médios do mercado e veja como a contabilidade.com
          oferece planos acessíveis, abertura grátis e suporte completo para o
        </p>

        <div className={styles.actions}>
          <Button text="Planos e Preços" onClick={() => {}} />
          <Button
            text="Falar com Especialista"
            onClick={() => {}}
            variant="secondary"
          />
        </div>

        <small className={styles.meta}>CRC SP-2SP038830/O-1</small>
      </div>

      <div className={styles.media}>
        <img
          src={mockImage}
          alt="Apresentação em vídeo sobre contabilidade online"
          className={styles.mediaImage}
        />

        <img
          src={playIcon}
          alt=""
          aria-hidden="true"
          className={styles.playButton}
        />
      </div>
    </section>
  );
}
