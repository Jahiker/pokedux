import React from 'react'
import PokemonCard from './PokemonCard'

import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  return (
    <div className='PokemonList'>
        {pokemons.map((pokemon, index) => {
            return <PokemonCard pokemon={pokemon} key={`pokemon-${index}`} />
        })}
    </div>
  )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}

export default PokemonList