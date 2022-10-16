import { useEffect } from "react";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { getPokemons } from "./api";
import { setPokemons } from "./actions";
import { Col } from "antd";
import "./App.css";
import Logo from "./statics/logo.svg";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemons();
      dispatch(setPokemons(pokemonRes));
    };

    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img className="logo" src={Logo} alt="Logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
