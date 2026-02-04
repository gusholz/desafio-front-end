import Card from "../../components/Card/Card";
import ChevronButton from "../../components/ChevronButton/ChevronButton";
import styles from "./PaymentDetails.module.css";
import { useState } from "react";

const CARD_WIDTH = 276;
const GAP = 24;

export default function PaymentDetails() {
  const [index, setIndex] = useState(0);

  const maxIndex = 2;

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className={styles.paymentDetails}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          Fatores que determinam quanto voce vai pagar
        </h1>
      </div>

      <div className={styles.carousel}>
        <div
          className={styles.cardsContainer}
          style={{
            transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
          }}
        >
          <Card
            iconSrc={"src/assets/icons/handshake.svg"}
            mainText={"Regime Tributário"}
            subText={"Simples Nacional, Lucro Presumido ou Lucro Real"}
          />
          <Card
            iconSrc={"src/assets/icons/care.svg"}
            mainText={"CNAE / Atividade"}
            subText={"Algumas atividades exigem mais obrigações acessórias."}
          />
          <Card
            iconSrc={"src/assets/icons/cofrinho.svg"}
            mainText={"Faturamento anual"}
            subText={"Quanto maior o volume, mais complexa a gestão."}
          />
          <Card
            iconSrc={"src/assets/icons/handshake.svg"}
            mainText={"Faturamento anual"}
            subText={"Quanto maior o volume, mais complexa a gestão."}
          />
        </div>
        <div className={styles.controls}>
          <ChevronButton
            isFlipped={true}
            action={handlePrev}
            isDisabled={index === 0}
          />
          <ChevronButton
            isFlipped={false}
            action={handleNext}
            isDisabled={index === maxIndex}
          />
        </div>
      </div>
    </section>
  );
}
