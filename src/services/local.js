export const postLocal = (data) =>
  localStorage.setItem('pokemons', JSON.stringify(data));

export const getLocal = () =>
  JSON.parse(localStorage.getItem('pokemons')) || [];
