import React from 'react';
import { Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ViewWrapper, TextElement } from '../../elements';
import { increment, decrement } from '../../actions';
import { State } from '../../config/store';

interface Props {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const ScreenA: React.FC<Props> = props => {
  const { navigation } = props;

  const dispatch = useDispatch();

  const value = useSelector((state: State) => state.main.value);

  const incrementFunction = () => dispatch(increment());

  const decrementFunction = () => dispatch(decrement());

  const navigateToB = () => navigation.navigate('ScreenB');

  const navigateToC = () => navigation.navigate('ScreenC');

  const navigateToHooksScreen = () => navigation.navigate('ScreenWithHooks');

  return (
    <ViewWrapper>
      <TextElement>It is Screen A</TextElement>
      <TextElement>Value: {value}</TextElement>
      <Button title="Increment" onPress={incrementFunction} />
      <Button title="Decrement" onPress={decrementFunction} />
      <Button title="Go to Component B" onPress={navigateToB} />
      <Button title="Go to Component C" onPress={navigateToC} />
      <Button
        title="Go to screen with Hooks examples"
        onPress={navigateToHooksScreen}
      />
    </ViewWrapper>
  );
};

export default ScreenA;
