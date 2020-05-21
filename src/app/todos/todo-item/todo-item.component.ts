import { FormControl, Validators } from '@angular/forms';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from './../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('editInput') editInput: ElementRef;

  checkCompleted: FormControl;
  textInput: FormControl;

  editMode = false;

  constructor(
    private store: Store<AppState>,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe((value) => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.editMode = true;
    this.changeDetectorRef.detectChanges();
    this.editInput.nativeElement.select();
  }

  exitEdit() {
    if (this.textInput.valid) {
      this.store.dispatch(
        actions.edit({ id: this.todo.id, text: this.textInput.value })
      );
    }

    this.editMode = false;
  }

  remove() {
    this.store.dispatch(actions.remove({ id: this.todo.id }));
  }
}
