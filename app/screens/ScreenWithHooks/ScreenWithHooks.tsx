import React, { useState, useMemo, useEffect } from 'react';
import { Button } from 'react-native';

import { ViewWrapper, TextElement } from '../../elements';
import { fibonacci } from '../../utils';

type initialTime = Date;
type initialIsGreen = boolean;
type initialNum = number;

const ScreenWithHooks: React.FC = () => {
  const [time, setTime] = useState<initialTime>(new Date());

  const setCurrentDate = () => setTime(new Date());

  useEffect(() => {
    const timer = setInterval(setCurrentDate, 1000);
    return () => clearInterval(timer);
  }, []);

  const [isGreen, setIsGreen] = useState<initialIsGreen>(true);

  const changeColor = () => setIsGreen(!isGreen);

  const [num, setNum] = useState<initialNum>(1);

  const changeNumber = () => setNum(num + 1);

  const fib = useMemo(() => fibonacci(num), [num]);

  return (
    <ViewWrapper>
      <TextElement>It is screen with Hooks examples</TextElement>
      <TextElement small isGreen={isGreen}>
        useState example: lorem ipsum
      </TextElement>
      <Button title="change color" onPress={changeColor} />
      <TextElement small>
        useMemo example: Fibonacci of {num} is {fib}
      </TextElement>
      <Button title="change fib" onPress={changeNumber} />
      <TextElement small>
        useEffect example: {time.toLocaleTimeString()}
      </TextElement>
    </ViewWrapper>
  );
};

export default ScreenWithHooks;
