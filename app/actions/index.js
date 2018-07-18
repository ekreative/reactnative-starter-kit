export const CHANGE_STATE_PROP = '_CHANGE_STATE_PROP'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export function changeStateProp (prop, value, reducer = 'data') {
  return dispatch => {
    dispatch({
      type: reducer.toUpperCase() + CHANGE_STATE_PROP,
      state: {
        prop: prop,
        value: value
      }
    })
  }
}

export function increment () {
  return dispatch => {
    dispatch({
      type: INCREMENT
    })
  }
}

export function decrement () {
  return dispatch => {
    dispatch({
      type: DECREMENT
    })
  }
}
