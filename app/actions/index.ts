export const CHANGE_STATE_PROP = '_CHANGE_STATE_PROP';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface ActionType {
  type: string;
  state?: {
    prop: string;
    value: any;
  };
}

export function changeStateProp(
  prop: string,
  value: any,
  reducer: string = 'data'
): ActionType {
  return {
    type: reducer.toUpperCase() + CHANGE_STATE_PROP,
    state: {
      prop,
      value
    }
  };
}

export function increment(): ActionType {
  return {
    type: INCREMENT
  };
}

export function decrement(): ActionType {
  return {
    type: DECREMENT
  };
}
