import Card from "./Card";
import styles from "./Cards.module.css";
export default function Cards(props) {
  const { characters } = props;
  const { onClose } = props;
  //   console.log(characters);

  return characters.map((character) => {
    return (
      <div className={styles.cardsContainer}>
        <Card key={character.id} character={character} onClose={onClose} />
      </div>
    );
  });
}
