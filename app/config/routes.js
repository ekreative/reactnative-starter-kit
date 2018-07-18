import { StackNavigator } from 'react-navigation'
import ScreenA from '../screens/ScreenA/ScreenAContainer'
import ScreenB from '../screens/ScreenB/ScreenBContainer'
import ScreenC from '../screens/ScreenC/ScreenCContainer'

const AppNavigator = StackNavigator(
  {
    ScreenA: {
      screen: ScreenA
    },
    ScreenB: {
      screen: ScreenB
    },
    ScreenC: {
      screen: ScreenC
    }
  },
  {
    initialRouteName: 'ScreenA'
  }
)

export default AppNavigator
