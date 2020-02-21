import { createStackNavigator } from '@react-navigation/stack';
import { createCompatNavigatorFactory } from '@react-navigation/compat';
import ScreenA from '../screens/ScreenA/ScreenA';
import ScreenB from '../screens/ScreenB/ScreenB';
import ScreenC from '../screens/ScreenC/ScreenC';
import ScreenWithHooks from '../screens/ScreenWithHooks/ScreenWithHooks';

export const AppNavigator = createCompatNavigatorFactory(createStackNavigator)(
  {
    ScreenA: {
      screen: ScreenA
    },
    ScreenB: {
      screen: ScreenB
    },
    ScreenC: {
      screen: ScreenC
    },
    ScreenWithHooks: {
      screen: ScreenWithHooks
    }
  },
  {
    initialRouteName: 'ScreenA'
  }
);
