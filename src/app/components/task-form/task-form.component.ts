import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  @ViewChild('taskForm') taskForm!: NgForm;
  @Output() addTasks: EventEmitter<{ taskTitle: string; taskId: string }> =
    new EventEmitter();
  taskTitle: string = '';
  taskId: string = '';
  valid: boolean = true;
  addTask = (task: any) => {
    if (task.value['task-title']) {
      this.addTasks.emit({
        taskTitle: task.value['task-title'],
        taskId: Math.random().toString(),
      });
      this.valid = true;
      alert('Task added successfully');
      this.taskForm.resetForm();
    } else {
      this.valid = false;
    }
  };
  // constructor() {
  // setInterval(() => {
  //   console.log(this.taskList);
  // }, 1000);
  // }
}
