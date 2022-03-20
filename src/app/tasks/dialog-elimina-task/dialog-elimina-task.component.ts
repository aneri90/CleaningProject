import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tasks } from 'src/app/model/tasks';
import { TasksService } from 'src/app/service/tasks.service';
import { DialogTasksComponent } from '../dialog-tasks/dialog-tasks.component';

@Component({
  selector: 'app-dialog-elimina-task',
  templateUrl: './dialog-elimina-task.component.html',
  styleUrls: ['./dialog-elimina-task.component.css'],
})
export class DialogEliminaTaskComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogTasksComponent>,
    public tasksService: TasksService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: number;
      title: string;
    }
  ) {}
  task: Tasks = new Tasks();
  messaggio: string;

  ngOnInit(): void {
    this.getById();
  }
  close() {
    this.dialogRef.close();
  }
  getById() {
    if (this.data.id) {
      this.tasksService.getById(this.data.id).subscribe((result) => {
        this.messaggio = result.message;
        this.task = result.data;
      });
    }
  }
  delete() {
    this.tasksService.deleteTask(this.data.id).subscribe((result) => {
      this.messaggio = result.message;
      this.snackBar.open(this.messaggio, 'Chiudi', { duration: 3000 });
      if (this.messaggio.length < 20) {
        this.close();
      }
    });
  }
}
