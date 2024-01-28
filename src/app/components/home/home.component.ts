import { Component } from '@angular/core';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskFormComponent, TaskListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  taskList: { taskTitle: string; taskId: string }[] = [
    { taskTitle: 'pratik', taskId: '12343534323434' },
    { taskTitle: 'defefefEnmknk', taskId: '234234544' },
  ];

  onAddTask = (newTask: { taskTitle: string; taskId: string }) => {
    this.taskList.push(newTask);
  };
  onTaskDeleted(taskId: string) {
    this.taskList = this.taskList.filter((task) => task.taskId !== taskId);
  }
  // constructor() {
  //   setInterval(() => {
  //     console.log(this.taskList);
  //   }, 1000);
  // }
  ngOnInit() {
    setInterval(() => {
      console.log(this.taskList);
    }, 1000);
  }
}
