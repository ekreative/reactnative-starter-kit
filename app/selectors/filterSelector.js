import { createSelector } from 'reselect'

const getFilteringList = (state) => state.main.list
const getFilter = (state, filter) => filter

export const getFiltering = createSelector(
  [ getFilteringList, getFilter ],
  (list, filter) => {
    return list.filter((item) => item.value === filter)
  }
)
