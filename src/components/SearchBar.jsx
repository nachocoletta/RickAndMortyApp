import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  // console.log(props);
  const { onSearch } = props;
  return (
    <div className={styles.searchBarContainer}>
      <input type="search" placeholder="Personaje..." />
      <button onClick={onSearch}>Buscar</button>
    </div>
  );
}
