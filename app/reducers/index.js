import { reducer as network } from 'react-native-offline'
import { combineReducers } from 'redux'
import data from './data'
import main from './main'

const rootReducer = combineReducers({
  data,
  main,
  network
})

export default rootReducer
