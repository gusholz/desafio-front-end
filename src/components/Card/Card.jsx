export default function Card({ iconSrc, mainText, subText }) {
  return (
    <div>
      <img src={iconSrc}></img>
      <h1>{mainText}</h1>
      <h2>{subText}</h2>
    </div>
  );
}
