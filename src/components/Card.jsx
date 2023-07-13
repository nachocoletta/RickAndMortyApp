import styles from "./Card.module.css";
export default function Card(props) {
  // console.log(props);
  const { character, onClose } = props;
  return (
    <div className={styles.divContenedorCard}>
      <button onClick={onClose}>X</button>
      <h2>Name: {character.name}</h2>
      <h2>Status: {character.status}</h2>
      <h2>Species: {character.species}</h2>
      <h2>Gender: {character.gender}</h2>
      <h2>Origin: {character.origin.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  );
}
