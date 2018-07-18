import update from 'immutability-helper'

import {
  CHANGE_STATE_PROP
} from '../actions'

const REDUCER = 'DATA'

const initialState = {
  testObject: {},
  testArray: [],
  testStr: ''
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case REDUCER + CHANGE_STATE_PROP:
      let {prop, value} = action.state
      return update(state, {
        [prop]: {
          $set: value
        }
      })
    default:
      return state
  }
}
