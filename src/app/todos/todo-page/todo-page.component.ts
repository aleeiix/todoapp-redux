import { AppState } from './../../app.reducer';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleAll } from './../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
})
export class TodoPageComponent {
  completed = false;

  constructor(private store: Store<AppState>) {}

  toggleAll() {
    this.completed = !this.completed;
    this.store.dispatch(toggleAll({ completed: this.completed }));
  }
}
