import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducer';
import { Todo } from '../models/todo.model';
import { FilterTypeEnum } from 'src/app/filter/filterType.enum';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit, OnDestroy {
  private _storeSubscription: Subscription;

  todos: Todo[];
  filterActual: FilterTypeEnum;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this._storeSubscription = this.store.subscribe((state: AppState) => {
      this.todos = state.todos;
      this.filterActual = state.filter;
    });
  }

  ngOnDestroy(): void {
    this._storeSubscription.unsubscribe();
  }
}
