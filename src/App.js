import "./App.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters from "./data.js";

function App() {
  const searchHandler = () => {
    window.alert("El id que estoy buscando");
  };

  const closeHandler = () => {
    window.alert("Emulamos que se cierra la card");
  };
  return (
    <div className="App">
      <SearchBar onSearch={searchHandler} />
      <Cards characters={characters} onClose={closeHandler} />
    </div>
  );
}

export default App;
