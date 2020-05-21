import { createReducer, on } from '@ngrx/store';
import {
  create,
  toggle,
  edit,
  remove,
  toggleAll,
  clearCompleted,
} from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Comprar traje Ironman'),
  new Todo('Vencer a Thanos'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) =>
    state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    })
  ),
  on(edit, (state, { id, text }) =>
    state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text };
      } else {
        return todo;
      }
    })
  ),
  on(remove, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toggleAll, (state, { completed }) =>
    state.map((todo) => ({ ...todo, completed }))
  ),
  on(clearCompleted, (state) => state.filter((todo: Todo) => !todo.completed))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
