import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  tasks: any[] = [];
  addTask(data: any) {
    this.tasks.push({ id: this.tasks.length, name: data });
  }
  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
