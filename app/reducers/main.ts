import produce from 'immer';
import {
  CHANGE_STATE_PROP,
  DECREMENT,
  INCREMENT,
  ActionType
} from '../actions';
import { list } from '../constants';

export interface ListElement {
  id: number;
  value: string;
}
export interface State {
  value: number;
  list: ListElement[];
}

const REDUCER: string = 'MAIN';
const initialState: State = {
  value: 0,
  list
};

export default (state: State = initialState, action: ActionType) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      };
    case REDUCER + CHANGE_STATE_PROP:
      if (action.state) {
        const { prop, value } = action.state;
        return produce(state, newState => {
          newState[prop as keyof State] = value;
        });
      }
      return state;
    default:
      return state;
  }
};
