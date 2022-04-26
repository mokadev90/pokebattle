import styled from 'styled-components';

export const CardBattleStyled = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(
      228.53deg,
      rgba(0, 0, 0, 0.2) 51.65%,
      rgba(0, 0, 0, 0) 51.65%
    ),
    linear-gradient(
      149.15deg,
      rgba(0, 0, 0, 0.2) 6.13%,
      rgba(0, 0, 0, 0) 102.58%
    ),
    linear-gradient(
      0deg,
      ${({ theme, type }) => theme.colorType[type]},
      ${({ theme, type }) => theme.colorType[type]}
    );
  /* color: ; */
  width: 30rem;
  height: 18rem;
  margin: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 52px;
  border: thick solid black;
  font-size: 1.2rem;
  color: white;
  text-shadow: 2px 2px 2px black;
  z-index: 9;
  margin-bottom: 3rem;

  .card-header {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-left: 1rem;
  }

  .card-body {
    display: flex;
  }

  .attacks {
    display: flex;
    flex-direction: column;
  }

  .attacks > span {
    margin-bottom: 1rem;
  }

  .option-btn {
    margin-top: 1rem;
    z-index: 99;
  }

  .option-btn > * {
    pointer-events: none;
  }
  & .img-container {
    background-color: #dbdbdb;
    width: 12rem;
    height: 14rem;
    border-radius: 34px;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: thin solid black;

    & > img {
      width: 100%;
      max-width: 80%;
    }
  }

  & > .stats {
    display: flex;
    font-size: 1rem;
    width: 100%;
    justify-content: space-around;
    height: 100%;
    align-items: center;
  }

  .option-btn {
    margin: 0.5rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50px;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .option-btn:hover {
    background-color: rgba(57, 91, 169, 1);
    color: rgba(255, 204, 4, 1);
  }

  .atk {
    display: flex;
    align-items: center;
  }

  & svg {
    font-size: 3rem;
  }

  /* & span {
    text-shadow: 2px 2px 2px black;
  } */
`;
