import { ThemeProvider } from 'styled-components';

const theme = {
  colorType: {
    fire: '#FF6767',
    grass: '#78DD67',
    water: '#67ADFF',
    normal: '#E6E6E6',
    electric: '#FAFF00',
    ice: '#00E0FF',
    fighting: '#FF9D9D',
    poison: '#F980ED',
    ground: '#F1A965',
    flying: '#BAB2EB',
    psychic: '#F600DE',
    bug: '#C1FFB7',
    rock: '#B4753A',
    ghost: '#843B7C',
    dark: '#5E5E5E',
    dragon: '#404CB5',
    steel: '#C5C5C5',
    fairy: '#FED8FF',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
