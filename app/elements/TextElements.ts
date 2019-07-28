import styled from 'styled-components/native';

import { BASE_COLOR } from '../constants';

interface Props {
  small?: boolean;
  isGreen?: boolean;
}

export const TextElement = styled.Text`
  font-size: ${(props: Props) => (props.small ? '14px' : '16px')};
  font-weight: bold;
  color: ${(props: Props) => {
    if (props.hasOwnProperty('isGreen')) {
      return props.isGreen ? 'limegreen' : 'crimson';
    }
    return BASE_COLOR;
  }};
`;
