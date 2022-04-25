import styled from 'styled-components';

export const CardStyled = styled.div`
  width: 14rem;
  height: 18rem;
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
    linear-gradient(0deg, #78dd67, #78dd67);
  margin: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 52px;
  border: thick solid black;
  font-size: 1.2rem;
  color: white;

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
    }
  }
`;