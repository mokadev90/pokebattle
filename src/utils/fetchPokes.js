import axios from 'axios';

export const fetchPokes = async () => {
  const res = await axios(
    'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'
  );
  const resPokes = res.data.results;
  const mapFetchPokes = await Promise.all(
    resPokes.map((poke) =>
      axios(poke.url).then((res) => {
        return {
          id: res.data.id,
          name: res.data.name,
          front_default: res.data.sprites.front_default,
          back_default: res.data.sprites.back_default,
          type: res.data.types[0].type.name,
          stats: res.data.stats,
        };
      })
    )
  );
  //   console.log('mapFetchPokes', mapFetchPokes);
  //   setPokemons([...mapFetchPokes]);
  //   console.log(pokemons);

  //   return pokemons;
  return [...mapFetchPokes];
};
