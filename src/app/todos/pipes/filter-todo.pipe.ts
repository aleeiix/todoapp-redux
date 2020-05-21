import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FilterTypeEnum } from 'src/app/filter/filterType.enum';

@Pipe({
  name: 'filterTodo',
})
export class FilterTodoPipe implements PipeTransform {
  transform(todos: Todo[], filter: FilterTypeEnum): Todo[] {
    switch (filter) {
      case FilterTypeEnum.COMPLETED:
        return todos.filter((todo: Todo) => todo.completed);

      case FilterTypeEnum.PENDINGS:
        return todos.filter((todo: Todo) => !todo.completed);

      default:
        return todos;
    }
  }
}
