import { createStackNavigator, createAppContainer } from 'react-navigation';
import ScreenA from '../screens/ScreenA/ScreenA';
import ScreenB from '../screens/ScreenB/ScreenB';
import ScreenC from '../screens/ScreenC/ScreenC';
import ScreenWithHooks from '../screens/ScreenWithHooks/ScreenWithHooks';

const AppNavigator = createStackNavigator(
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

export default createAppContainer(AppNavigator);
