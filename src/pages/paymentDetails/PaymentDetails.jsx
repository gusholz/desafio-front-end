import Card from "../../components/Card/Card";
import ChevronButton from "../../components/ChevronButton/ChevronButton";

export default function PaymentDetails() {
  return (
    <section>
      <div className="content">
        <h1>Fatores que determinam quanto voce vai pagar</h1>
      </div>
      <div className="cardsContainer">
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
      <div>
        <ChevronButton isFlipped={true} action={() => {}} />
        <ChevronButton isFlipped={false} action={() => {}} />
      </div>
    </section>
  );
}
