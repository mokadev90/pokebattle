import styled from 'styled-components';

export const StyledWinnerModal = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: rgba(255, 204, 4, 1);
  flex-direction: column;

  & > span {
    display: block;
  }

  &.is-open {
    display: flex;
  }

  & > button {
    margin-top: 8rem;
    font-size: 2rem;
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
      linear-gradient(0deg, grey, grey);
    color: rgba(201, 161, 1, 1);
  }

  & > button:hover {
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
      linear-gradient(0deg, rgba(57, 91, 169, 1), rgba(57, 91, 169, 1));
    color: rgba(255, 204, 4, 1);
  }
`;
