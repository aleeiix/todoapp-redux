import { createAction, props } from '@ngrx/store';
import { FilterTypeEnum } from './filterType.enum';

export const setFilter = createAction(
  '[FILTER] Set filter',
  props<{ filter: FilterTypeEnum }>()
);
