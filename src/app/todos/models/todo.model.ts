export class Todo {
  id: number;
  text: string;
  completed: boolean;

  constructor(text: string) {
    this.id = new Date().getTime() * Math.random();
    this.text = text;
    this.completed = false;
  }
}
