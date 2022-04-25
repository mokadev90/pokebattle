import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { CardStyled } from './components/CardStyled';
import { Image } from './components/Image';
import { Ribbon } from './components/Ribbon/Ribbon';
import { RibbonStyled } from './components/Ribbon/RibbonStyled';

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await axios(
        'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
      );
      console.log('fetch', res);
      const fetchPokes = res.data.results;
      console.log('fetchPokes', fetchPokes);
      const flattenPokes = fetchPokes.flat();
      console.log('flattenPokes', flattenPokes);
      setPokemons([...flattenPokes]);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Ribbon />
      <div className="main">
        <div className="title">
          <span>Pokebattle!</span>
        </div>
        <div className="input">
          <label>Busca tu favorito!</label>
          <input type="text" />
        </div>
        <div className="card-container">
          {pokemons.map((pokemon) => (
            <CardStyled className="card">
              <label>{pokemon?.name.toUpperCase()}</label>
              <div className="img-container">
                {/* <Image url={pokemon?.url} /> */}
              </div>
            </CardStyled>
          ))}
        </div>
      </div>
      <Ribbon />
    </div>
  );
}

export default App;
