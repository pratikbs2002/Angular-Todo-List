import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  taskList: { taskTitle: string; taskId: string }[] = [
    { taskTitle: 'pratik', taskId: '12343534323434' },
    { taskTitle: 'defefefE', taskId: '234234544' },
  ];

  deleteTask(taskId: string) {
    this.taskList = this.taskList.filter((task) => task.taskId !== taskId);
  }
}
