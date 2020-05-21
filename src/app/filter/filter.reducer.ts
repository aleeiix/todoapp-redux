import { createReducer, on } from '@ngrx/store';
import { FilterTypeEnum } from './filterType.enum';
import { setFilter } from './filter.actions';

export const initialState = FilterTypeEnum.ALL;

const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filter }) => filter)
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
