import React from 'react';
import { StyledWinnerModal } from './StyledWinnerModal';

export const WinnerModal = ({ winner, setPokemonSelected }) => {
  return (
    <StyledWinnerModal className={`${winner !== null && 'is-open'}`}>
      El ganador es: {winner}
      <button onClick={() => setPokemonSelected(null)}>Reiniciar</button>
    </StyledWinnerModal>
  );
};
