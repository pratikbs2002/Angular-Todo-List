import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  taskList: { taskTitle: string; taskId: string }[] = [];
  taskTitle: string = '';
  taskId: string = '';
  valid: boolean = true;
  addTask = (task: any) => {
    if (task.value['task-title']) {
      this.taskList.push({
        taskTitle: task.value['task-title'],
        taskId: Math.random().toString(),
      });
      this.valid = true;
      alert('Task added successfully');
    } else {
      this.valid = false;
    }
  };
  constructor() {
    // setInterval(() => {
    //   console.log(this.taskList);
    // }, 1000);
  }
}
