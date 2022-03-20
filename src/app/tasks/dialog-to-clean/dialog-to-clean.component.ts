import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tasks } from 'src/app/model/tasks';
import { Users } from 'src/app/model/users';
import { TasksService } from 'src/app/service/tasks.service';
import { UsersService } from 'src/app/service/users.service';
import { DialogTasksComponent } from '../dialog-tasks/dialog-tasks.component';
import { PulitoreService } from 'src/app/service/pulitore.service';
import { TaskService } from 'src/app/service/task.service';
import { LastCleanService } from 'src/app/service/lastclean.service';
import { FrequenzaService } from 'src/app/service/frequenza.service';

@Component({
  selector: 'app-dialog-to-clean',
  templateUrl: './dialog-to-clean.component.html',
  styleUrls: ['./dialog-to-clean.component.css'],
})
export class DialogToCleanComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogTasksComponent>,
    public tasksService: TasksService,
    public usersService: UsersService,
    public formBuilder: FormBuilder,
    private subject: PulitoreService,
    private subjectTask: TaskService,
    private lastService: LastCleanService,
    private freq: FrequenzaService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: number;
      title: string;
    }
  ) {}
  users: Users[];
  username: string;
  task: Tasks = new Tasks();
  tasks: Tasks[];
  messaggio: string;
  formGroup: FormGroup;
  lastClean: Date;

  inizializeFormGroup() {
    this.formGroup = this.formBuilder.group({
      pulitore: ['', Validators.required],
    });
  }
  saveFrequenza() {
    this.freq.setFrequenza(this.task.frequenza);
  }
  saveLastClean() {
    this.lastService.setLastClean(this.task.dataPulizia);
  }
  saveTask() {
    this.subjectTask.setTask(this.task);
  }
  savePulitore() {
    this.subject.setPulitore(this.username);
  }
  getAllUsers() {
    this.usersService.getListUsers().subscribe((result) => {
      console.log(result);
      this.users = result.data;
    });
  }
  ngOnInit(): void {
    this.inizializeFormGroup();
    this.getAllUsers();
    this.getById();
  }
  close() {
    this.dialogRef.close();
  }
  getListTasks() {
    this.tasksService.getListTasks().subscribe((result) => {
      this.messaggio = result.message;
      this.tasks = result.data;
    });
  }
  getById() {
    if (this.data.id) {
      this.tasksService.getById(this.data.id).subscribe((result) => {
        this.messaggio = result.message;

        this.task = result.data;
      });
    }
  }
  modifyDate() {
    this.tasksService.modifyTaskDate(this.task).subscribe((result) => {
      this.messaggio = result.message;
      this.task = result.data;
      this.snackBar.open(this.messaggio, 'Chiudi', { duration: 3000 });
      if (this.messaggio.length < 20) {
        this.close();
      }
    });
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
