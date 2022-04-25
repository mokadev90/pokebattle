import styled from 'styled-components';
import ribbon from '../../assets/ribbon.svg';
import { Ribbon } from './Ribbon';

export const RibbonStyled = styled.div`
  background-image: url('${ribbon}');

  & > img {
    position: sticky;
  }
`;
