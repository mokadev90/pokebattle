import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { CardStyled } from './components/CardStyled';
import { Ribbon } from './components/Ribbon/Ribbon';
import Theme from '../theme';
import { getLocal, postLocal } from './services/local';
import { fetchPokes } from './utils/fetchPokes';
import { CardBattleStyled } from './components/CardBattleStyled';
import back from './assets/back.svg';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState(null);
  const [randomPokemon, setRandomPokemon] = useState(null);

  const getRandomPokemon = () => {
    const random = Math.floor(Math.random() * pokemons.length);
    setRandomPokemon(pokemons[random]);
  };

  useEffect(() => {
    const fetchs = async () => {
      const fetchingPokes = await fetchPokes();
      console.log(fetchingPokes);
      postLocal(fetchingPokes);
      setPokemons(fetchingPokes);
    };
    fetchs();
  }, []);

  const filterPokes = (value) => {
    const allPokemons = getLocal();
    const findPoke = allPokemons.filter((poke) => poke.name.includes(value));
    console.log('findPoke', findPoke);
    setPokemons(findPoke);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    value === '' ? setPokemons(getLocal()) : filterPokes(value);
  };

  const handleClick = (pokemon) => {
    getRandomPokemon();
    setPokemonSelected(pokemon);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Theme>
      <div className="App">
        <Ribbon />
        <div className="main">
          <div className="title">
            <span>Pokebattle!</span>
          </div>
          {pokemonSelected ? (
            <div className="battle-container" style={{ scrollTop: 0 }}>
              <img src={back} className="back" />
              <div className="arena">
                <CardBattleStyled
                  className="card"
                  type={randomPokemon.type}
                  key={randomPokemon.id}
                >
                  <label>{randomPokemon.name.toUpperCase()}</label>
                  <div className="img-container">
                    <img src={randomPokemon.sprites} />
                  </div>
                  <div className="stats">
                    <div className="first-col">
                      <span>HP - {randomPokemon.stats[0].base_stat}</span>
                      <br />
                      <span>ATK - {randomPokemon.stats[1].base_stat}</span>
                      <br />
                      <span>DEF - {randomPokemon.stats[2].base_stat}</span>
                    </div>
                    <div className="second-col">
                      <span>SP. ATK - {randomPokemon.stats[3].base_stat}</span>
                      <br />
                      <span>SP. DEF - {randomPokemon.stats[4].base_stat}</span>
                      <br />
                      <span>SPD - {randomPokemon.stats[5].base_stat}</span>
                    </div>
                  </div>
                </CardBattleStyled>
                <CardBattleStyled
                  className="card"
                  type={pokemonSelected.type}
                  key={pokemonSelected.id}
                >
                  <label>{pokemonSelected.name.toUpperCase()}</label>
                  <div className="img-container">
                    <img src={pokemonSelected.sprites} />
                  </div>
                  <div className="stats">
                    <div className="first-col">
                      <span>HP - {pokemonSelected.stats[0].base_stat}</span>
                      <br />
                      <span>ATK - {pokemonSelected.stats[1].base_stat}</span>
                      <br />
                      <span>DEF - {pokemonSelected.stats[2].base_stat}</span>
                    </div>
                    <div className="second-col">
                      <span>
                        SP. ATK - {pokemonSelected.stats[3].base_stat}
                      </span>
                      <br />
                      <span>
                        SP. DEF - {pokemonSelected.stats[4].base_stat}
                      </span>
                      <br />
                      <span>SPD - {pokemonSelected.stats[5].base_stat}</span>
                    </div>
                  </div>
                </CardBattleStyled>
              </div>
            </div>
          ) : (
            <>
              <div className="input">
                <label>Busca tu favorito!</label>
                <input type="text" onChange={handleChange} />
              </div>
              <div className="card-container">
                {pokemons !== [] &&
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
                          <img src={pokemon.sprites} />
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
          )}
        </div>
        <Ribbon />
      </div>
    </Theme>
  );
}

export default App;
