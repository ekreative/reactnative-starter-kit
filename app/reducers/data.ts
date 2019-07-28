import produce from 'immer';

import { CHANGE_STATE_PROP, ActionType } from '../actions';

const REDUCER = 'DATA';

export interface State {
  testObject: {};
  testArray: [];
  testStr: string;
  [key: string]: any;
}

const initialState: State = {
  testObject: {},
  testArray: [],
  testStr: ''
};

export default function reducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case REDUCER + CHANGE_STATE_PROP:
      if (action.state) {
        const { prop, value } = action.state;
        return produce(state, newState => {
          newState[prop] = value;
        });
      }
      return state;
    default:
      return state;
  }
}
