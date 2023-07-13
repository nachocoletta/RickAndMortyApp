import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  const { onClose } = props;
  //   console.log(characters);

  return characters.map((character) => {
    return <Card key={character.id} character={character} onClose={onClose} />;
  });
}
