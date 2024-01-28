import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  taskList: { taskTitle: string; taskId: string }[] = [];
  taskTitle: string = '';
  taskId: string = '';
  addTask = (task: any) => {
    if (task.value['task-title']) {
      this.taskList.push({
        taskTitle: task.value['task-title'],
        taskId: Math.random().toString(),
      });
      alert('Task added successfully');
    } else {
      alert('Please enter a task title');
    }
  };
  constructor() {
    setInterval(() => {
      console.log(this.taskList);
    }, 1000);
  }
}
