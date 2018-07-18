import { createSelector } from 'reselect'

const getValueState = (state) => state.main.value

export const getValue = createSelector(
  [ getValueState ],
  (value) => value
)
