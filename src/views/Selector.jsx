import React from 'react';
import { CardStyled } from '../components/CardStyled';
import { getLocal } from '../services/local';

export const Selector = ({
  pokemons,
  setPokemonSelected,
  getRandomPokemon,
  setPokemons,
}) => {
  const handleClick = (pokemon) => {
    getRandomPokemon();
    setPokemonSelected(pokemon);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    // console.log(value);
    value === '' ? setPokemons(getLocal()) : filterPokes(value);
  };

  const filterPokes = (value) => {
    const allPokemons = getLocal();
    const findPoke = allPokemons.filter((poke) => poke.name.includes(value));
    // console.log('findPoke', findPoke);
    setPokemons(findPoke);
  };

  return (
    <>
      <div className="input">
        <label>Busca tu favorito!</label>
        <input type="text" onChange={handleChange} />
      </div>
      <div className="card-container">
        {pokemons !== null &&
          pokemons.map((pokemon) => {
            //   console.log(pokemon);
            return (
              <CardStyled
                className="card"
                type={pokemon.type}
                key={pokemon.id}
                onClick={() => {
                  handleClick(pokemon);
                }}
              >
                <label>{pokemon.name.toUpperCase()}</label>
                <div className="img-container">
                  <img src={pokemon.front_default} />
                </div>
                <div className="stats">
                  <div className="first-col">
                    <span>HP - {pokemon.stats[0].base_stat}</span>
                    <br />
                    <span>ATK - {pokemon.stats[1].base_stat}</span>
                    <br />
                    <span>DEF - {pokemon.stats[2].base_stat}</span>
                  </div>
                  <div className="second-col">
                    <span>SP. ATK - {pokemon.stats[3].base_stat}</span>
                    <br />
                    <span>SP. DEF - {pokemon.stats[4].base_stat}</span>
                    <br />
                    <span>SPD - {pokemon.stats[5].base_stat}</span>
                  </div>
                </div>
              </CardStyled>
            );
          })}
      </div>
    </>
  );
};
