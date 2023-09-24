import { useEffect } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchPlemonData = async () => {
      let res = getAllPokemon(initialURL);
      console.log(res);
    };
    fetchPlemonData();
  }, []);

  return <div className="App"></div>;
}

export default App;
