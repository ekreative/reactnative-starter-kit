import React from 'react';
import { Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ViewWrapper, TextElement } from '../../elements';
import { increment, decrement } from '../../actions';
import { State } from '../../config/store';
import MyBackButton from '../../components/MyBackButton';

const ScreenB: React.FC = () => {
  const dispatch = useDispatch();

  const value = useSelector((state: State) => state.main.value);

  const incrementFunction = () => dispatch(increment());

  const decrementFunction = () => dispatch(decrement());

  return (
    <ViewWrapper>
      <TextElement>It is Component B</TextElement>
      <TextElement>Value: {value}</TextElement>
      <Button title="Increment" onPress={incrementFunction} />
      <Button title="Decrement" onPress={decrementFunction} />
      <MyBackButton />
    </ViewWrapper>
  );
};

export default ScreenB;
