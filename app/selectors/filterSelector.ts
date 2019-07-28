import { createSelector } from 'reselect';
import { ListElement } from '../reducers/main';
import { State } from '../config/store';

const getFilteringList = (state: State) => state.main.list;
const getFilter = (state: State, filter: string) => filter;

export const getFiltering = createSelector(
  [getFilteringList, getFilter],
  (list, filter) => {
    return list.filter((item: ListElement) => item.value === filter);
  }
);
