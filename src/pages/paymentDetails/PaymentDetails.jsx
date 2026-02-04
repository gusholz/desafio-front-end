import Card from "../../components/Card/Card";
import ChevronButton from "../../components/ChevronButton/ChevronButton";
import styles from "./PaymentDetails.module.css";
import { cards } from "./PaymentDetails.data";
import { useSwipe } from "../../hooks/useSwipe/useSwipe";
import { useState } from "react";

export default function PaymentDetails() {
  const [index, setIndex] = useState(0);
  const maxIndex = cards.length - 1;

  const handleNext = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const handlePrev = () => setIndex((i) => Math.max(i - 1, 0));

  const { onTouchStart, onTouchEnd } = useSwipe({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrev,
  });

  return (
    <section className={styles.paymentDetails}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          Fatores que determinam quanto voce vai pagar
        </h1>
      </div>

      <div
        className={styles.carousel}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={styles.cardsContainer}
          style={{
            "--index": index,
          }}
        >
          {cards.map((card, i) => (
            <Card
              key={i}
              iconSrc={card.icon}
              mainText={card.title}
              subText={card.subtitle}
            />
          ))}
        </div>
        <div className={styles.controls}>
          <div className={styles.chevrons}>
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

          <div className={styles.dots}>
            {[0, 1, 2, 3].map((dotIndex) => (
              <button
                key={dotIndex}
                className={`${styles.dot} ${
                  dotIndex === index ? styles.active : ""
                }`}
                onClick={() => setIndex(dotIndex)}
                aria-label={`Ir para card ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
