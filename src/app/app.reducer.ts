import { ActionReducerMap } from '@ngrx/store';

import { FilterTypeEnum } from './filter/filterType.enum';
import { Todo } from './todos/models/todo.model';

import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
  todos: Todo[];
  filter: FilterTypeEnum;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
