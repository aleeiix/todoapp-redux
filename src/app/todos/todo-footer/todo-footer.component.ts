import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as todoActions from '../todo.actions';
import * as filterActions from './../../filter/filter.actions';
import { FilterTypeEnum } from './../../filter/filterType.enum';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
})
export class TodoFooterComponent implements OnInit {
  filters = [
    { id: FilterTypeEnum.ALL, text: 'All' },
    { id: FilterTypeEnum.COMPLETED, text: 'Completed' },
    { id: FilterTypeEnum.PENDINGS, text: 'Pendings' },
  ];
  filterActive = FilterTypeEnum.ALL;
  pendings: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state: AppState) => {
      this.filterActive = state.filter;
      this.pendings = state.todos.reduce((total, current) => {
        if (!current.completed) {
          return total + 1;
        }
        return total;
      }, 0);
    });
  }

  setFilter(id: FilterTypeEnum) {
    this.store.dispatch(filterActions.setFilter({ filter: id }));
  }

  clearCompleted() {
    this.store.dispatch(todoActions.clearCompleted());
  }
}
