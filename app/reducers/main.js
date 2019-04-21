import update from 'immutability-helper'
import { CHANGE_STATE_PROP, DECREMENT, INCREMENT } from '../actions'
import { list } from '../constants/index'

const REDUCER = 'MAIN'
const initialState = {
  value: 0,
  list
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      }
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }
    case REDUCER + CHANGE_STATE_PROP:
      return update(state, {
        [action.state.prop]: { $set: action.state.value }
      })
    default:
      return state
  }
}
