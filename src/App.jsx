import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { CardStyled } from './components/CardStyled';
import { Image } from './components/Image';
import { Ribbon } from './components/Ribbon/Ribbon';
import { RibbonStyled } from './components/Ribbon/RibbonStyled';
import Theme from '../theme';

function App() {
  const [pokemons, setPokemons] = useState([]);
  //   const [fetchPokemons, setFetchPokemons] = useState([]);

  const postLocal = (data) =>
    localStorage.setItem('pokemons', JSON.stringify(data));

  const getLocal = () => JSON.parse(localStorage.getItem('pokemons')) || [];

  useEffect(() => {
    const fetchPokes = async () => {
      const res = await axios(
        'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'
      );
      const fetchPokes = res.data.results;
      const mapFetchPokes = await Promise.all(
        fetchPokes.map((poke) =>
          axios(poke.url).then((res) => {
            return {
              id: res.data.id,
              name: res.data.name,
              sprites: res.data.sprites.front_default,
              type: res.data.types[0].type.name,
              stats: res.data.stats,
            };
          })
        )
      );
      setPokemons([...mapFetchPokes]);
    };

    fetchPokes();
  }, []);

  //   postLocal(pokemons.slice(0, 20));
  const scrollComponent = useRef();

  const handleScroll = () => {
    let element = scrollComponent.value;
    if (element.getBoundingClientRect().bottom < window.innerHeight) {
      //   loadMoreCharacters();
    }
  };

  return (
    <Theme>
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
          <div className="card-container" ref={scrollComponent}>
            {console.log(pokemons)}
            {pokemons.length > 0 &&
              pokemons.slice(0, 50).map((pokemon) => {
                //   console.log(pokemon);
                return (
                  <CardStyled
                    className="card"
                    type={pokemon.type}
                    key={pokemon.id}
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
        </div>
        <Ribbon />
      </div>
    </Theme>
  );
}

export default App;
