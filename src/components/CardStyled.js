import styled from 'styled-components';

export const CardStyled = styled.div`
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
  width: 14rem;
  height: 18rem;
  margin: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 52px;
  border: thick solid black;
  font-size: 1.2rem;
  color: white;
  text-shadow: 2px 2px 2px black;

  & > .img-container {
    background-color: #dbdbdb;
    width: 12rem;
    height: 7rem;
    border-radius: 32px;
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

  /* & span {
    text-shadow: 2px 2px 2px black;
  } */
`;
