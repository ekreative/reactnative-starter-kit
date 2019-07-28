import { combineReducers } from 'redux';
import data from './data';
import main from './main';

const rootReducer = combineReducers({
  data,
  main
});

export default rootReducer;
