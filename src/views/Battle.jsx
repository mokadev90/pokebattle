import React, { useEffect, useState } from 'react';
import { CardBattleStyled } from '../components/CardBattleStyled';
import back from '../assets/back.svg';
import {
  RiRecordCircleLine,
  RiCloseCircleLine,
  RiStopCircleLine,
} from 'react-icons/ri';
import { WinnerModal } from '../components/WinnerModal';

const initialStats = {
  hp: 0,
  atk: 0,
  def: 0,
  mag: 0,
  defmag: 0,
  spd: 0,
  atkh: 0,
  defh: 0,
};

export const Battle = ({
  pokemons,
  pokemonSelected,
  randomPokemon,
  setRandomPokemon,
  setPokemonSelected,
}) => {
  const [vidaSelected, setVidaSelected] = useState(100);
  const [vidaRandom, setVidaRandom] = useState(100);
  const [ataque1, setAtaque1] = useState(null);
  const [ataque2, setAtaque2] = useState(null);
  const [stats1, setStats1] = useState(initialStats);
  const [stats2, setStats2] = useState(initialStats);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    finished();
  }, [vidaSelected, vidaRandom]);

  const finished = () => {
    if (vidaSelected <= 0 && vidaRandom <= 0) {
      setWinner('Empate');
    }
    if (vidaSelected <= 0 && vidaRandom > 0) {
      setWinner('El otro');
    }
    if (vidaSelected > 0 && vidaRandom <= 0) {
      setWinner('Vos');
    }
  };

  useEffect(() => {
    calculateStats1();
    calculateStats2();
    // calculateAttacks();
  }, []);

  const calculateStats1 = () => {
    // console.log('pokemonSelected', pokemonSelected);
    const { stats } = pokemonSelected;
    // console.log('stats', stats);
    const hp = stats[0].base_stat; //45
    // console.log(hp1);
    const atk = stats[1].base_stat; //49
    const def = stats[2].base_stat; //49
    const mag = stats[3].base_stat; //65
    const defmag = stats[4].base_stat; //65
    const spd = stats[5].base_stat; //45
    const atkh = Math.round(
      (Math.max(atk, mag) * (hp + atk + def + mag + defmag + spd)) / 6 / 100,
      0
    );
    const defh = Math.round(
      (Math.max(def, defmag) * (hp + atk + def + mag + defmag + spd)) / 6 / 100,
      0
    );
    const statsCal = {
      hp,
      atk,
      def,
      mag,
      defmag,
      spd,
      atkh,
      defh,
    };
    // console.log(statsCal);
    setStats1(statsCal);
    setVidaSelected(statsCal.hp);
  };

  const calculateStats2 = () => {
    // console.log('pokemonRandom', pokemonRandom);
    const { stats } = randomPokemon;
    // console.log('stats', stats);
    const hp = stats[0].base_stat; //45
    // console.log(hp1);
    const atk = stats[1].base_stat; //49
    const def = stats[2].base_stat; //49
    const mag = stats[3].base_stat; //65
    const defmag = stats[4].base_stat; //65
    const spd = stats[5].base_stat; //45
    const atkh = Math.round(
      (Math.max(atk, mag) * (hp + atk + def + mag + defmag + spd)) / 6 / 100,
      0
    );
    const defh = Math.round(
      (Math.max(def, defmag) * (hp + atk + def + mag + defmag + spd)) / 6 / 100,
      0
    );
    const statsCal = {
      hp,
      atk,
      def,
      mag,
      defmag,
      spd,
      atkh,
      defh,
    };
    // console.log(statsCal);
    setStats2(statsCal);
    setVidaRandom(statsCal.hp);
  };

  const handleAttack = (e) => {
    setAtaque1(e.target.value);
    console.log('aaa');
    randomAttack();
    console.log('ataque1', ataque1);
    calculateAttacks();
    console.log('aaa');
  };

  const calculateAttacks = () => {
    switch (ataque1) {
      case 'Físico':
        console.log('daño fisico');
        setVidaRandom((prev) => prev - (stats1.atk - stats2.def * 0.5));
        break;

      case 'Mágico':
        setVidaRandom((prev) => prev - (stats1.mag - stats2.defmag * 0.5));
        break;

      case 'Habilidad':
        setVidaRandom((prev) => prev - (stats1.atkh - stats2.defh * 0.5));
        break;
    }
    switch (ataque2) {
      case 'Físico':
        console.log('daño fisico');
        setVidaSelected((prev) => prev - (stats2.atk - stats1.def * 0.5));
        break;

      case 'Mágico':
        setVidaSelected((prev) => prev - (stats2.mag - stats1.defmag * 0.5));
        break;

      case 'Habilidad':
        setVidaSelected((prev) => prev - (stats2.atkh - stats1.defh * 0.5));
        break;
    }
  };
  const randomAttack = () => {
    const random = Math.floor(Math.random() * 3) + 1;
    const attacks = {
      1: 'Físico',
      2: 'Mágico',
      3: 'Habilidad',
    };
    setAtaque2(attacks[random]);
  };

  const handleClick = () => {
    setRandomPokemon(null);
    setPokemonSelected(null);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="battle-container" style={{ scrollTop: 0 }}>
      <img src={back} className="back" />
      <div className="arena">
        <CardBattleStyled
          className="card"
          type={randomPokemon.type}
          key={randomPokemon.id}
        >
          <div className="card-header">
            <label>{randomPokemon.name.toUpperCase()}</label>
            <span>
              HP: {vidaRandom}/{stats2.hp}
            </span>
          </div>
          <div className="card-body">
            <div className="img-container">
              <img src={randomPokemon.front_default} />
            </div>
            <div className="attacks">
              <span>Elegiste: {ataque2}</span>
              <div className="atk">
                <button className="option-btn" value="Físico">
                  <RiRecordCircleLine />
                </button>
                <label>Daño F: {stats2.atk}</label>
              </div>
              <div className="atk">
                <button className="option-btn" value="Mágico">
                  <RiCloseCircleLine />
                </button>
                <label>Daño M: {stats2.mag}</label>
              </div>
              <div className="atk">
                <button className="option-btn" value="Habilidad">
                  <RiStopCircleLine />
                </button>
                <label>
                  Daño: {stats2.atkh} y Defensa: {stats2.defh}
                </label>
              </div>
            </div>
          </div>
        </CardBattleStyled>
        <CardBattleStyled
          className="card"
          type={pokemonSelected.type}
          key={pokemonSelected.id}
        >
          <div className="card-header">
            <label>{pokemonSelected.name.toUpperCase()}</label>
            <span>
              HP: {vidaSelected}/{stats1.hp}
            </span>
          </div>
          <div className="card-body">
            <div className="img-container">
              <img src={pokemonSelected.back_default} />
            </div>
            <div className="attacks">
              <span>Elegiste: {ataque1}</span>
              <div className="atk">
                <button
                  className="option-btn"
                  value="Físico"
                  onClick={handleAttack}
                >
                  <RiRecordCircleLine />
                </button>
                <label>Daño F: {stats1.atk}</label>
              </div>
              <div className="atk">
                <button
                  className="option-btn"
                  value="Mágico"
                  onClick={handleAttack}
                >
                  <RiCloseCircleLine />
                </button>
                <label>Daño M: {stats1.mag}</label>
              </div>
              <div className="atk">
                <button
                  className="option-btn"
                  value="Habilidad"
                  onClick={handleAttack}
                >
                  <RiStopCircleLine />
                </button>
                <label>
                  Daño: {stats1.atkh} y Defensa M: {stats1.defh}
                </label>
              </div>
            </div>
          </div>
        </CardBattleStyled>
      </div>
      <button
        className="volver-btn"
        onClick={() => {
          handleClick();
        }}
      >
        Volver
      </button>
      <WinnerModal winner={winner} setPokemonSelected={setPokemonSelected} />
    </div>
  );
};
