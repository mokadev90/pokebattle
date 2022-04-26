import { useEffect, useState } from 'react';
import './App.css';
import { Ribbon } from './components/Ribbon/Ribbon';
import Theme from '../theme';
import { getLocal, postLocal } from './services/local';
import { fetchPokes } from './utils/fetchPokes';
import { Battle } from './views/Battle';
import { Selector } from './views/Selector';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState(null);
  const [randomPokemon, setRandomPokemon] = useState(null);

  const getRandomPokemon = () => {
    const random = Math.floor(Math.random() * pokemons.length);
    setRandomPokemon(pokemons[random]);
  };

  useEffect(() => {
    const local = getLocal();
    const fetchs = async () => {
      const fetchingPokes = await fetchPokes();
      console.log(fetchingPokes);
      postLocal(fetchingPokes);
      setPokemons(fetchingPokes);
    };
    local ? setPokemons(local) : fetchs();
  }, []);

  return (
    <Theme>
      <div className="App">
        <Ribbon />
        <div className="main">
          <div className="title">
            <span>Pokebattle!</span>
          </div>
          {pokemonSelected ? (
            <Battle
              pokemons={pokemons}
              pokemonSelected={pokemonSelected}
              randomPokemon={randomPokemon}
              setRandomPokemon={setRandomPokemon}
              setPokemonSelected={setPokemonSelected}
            />
          ) : (
            <Selector
              pokemons={pokemons}
              setPokemonSelected={setPokemonSelected}
              getRandomPokemon={getRandomPokemon}
              setPokemons={setPokemons}
            />
          )}
        </div>
        <Ribbon />
      </div>
    </Theme>
  );
}

export default App;
