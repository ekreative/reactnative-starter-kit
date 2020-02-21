import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import { ViewWrapper, TextElement } from '../../elements';
import { getFiltering } from '../../selectors/filterSelector';
import { State } from '../../config/store';
import { ListElement } from '../../reducers/main';

const ScreenC: React.FC = () => {
  const value = useSelector((state: { main: any }) => state.main.value);

  const list = useSelector((state: State) => getFiltering(state, 'Apple'));

  return (
    <ViewWrapper>
      <TextElement>It is Component C</TextElement>
      <TextElement>Value: {value}</TextElement>
      {list.map((item: ListElement) => {
        return <Text key={item.id}>{item.value}</Text>;
      })}
    </ViewWrapper>
  );
};

export default ScreenC;
