import { useEffect } from 'react';
import { connect } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemons } from './api';
import { setPokemons as setPokemonsActions } from './actions';
import { Col } from 'antd';
import './App.css';
import Logo from './statics/logo.svg'


function App({ pokemons, setPokemons }) {
console.log("🚀 ~ file: App.js ~ line 13 ~ App ~ pokemons", pokemons)

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemons();
      setPokemons(pokemonRes);
    }

    fetchPokemons()
  },[])
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img className='logo' src={Logo} alt="Logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
