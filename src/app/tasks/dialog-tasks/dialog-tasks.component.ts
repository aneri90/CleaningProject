import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tasks } from 'src/app/model/tasks';
import { TasksService } from 'src/app/service/tasks.service';

@Component({
  selector: 'app-dialog-tasks',
  templateUrl: './dialog-tasks.component.html',
  styleUrls: ['./dialog-tasks.component.css'],
})
export class DialogTasksComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    public taskBuilder: FormBuilder,
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
  taskForm: FormGroup;

  formInit() {
    this.taskForm = this.taskBuilder.group({
      descrizione: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(25)]),
      ],
      frequenza: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(3)]),
      ],
    });
  }
  ngOnInit(): void {
    this.getById();
    this.formInit();
  }
  getById() {
    if (this.data.id) {
      this.tasksService.getById(this.data.id).subscribe((result) => {
        this.task = result.data;
      });
    }
  }
  update() {
    if (!this.taskForm.invalid) {
      this.tasksService.modifyTask(this.task).subscribe((result) => {
        this.messaggio = result.message;
        this.snackBar.open(this.messaggio, 'Chiudi', {
          duration: 3000,
          panelClass: ['snackBarOk'],
        });
        this.close();
      });
    } else {
      this.taskForm.markAllAsTouched();
      this.snackBar.open('Operazione non valida', 'Chiudi', {
        duration: 3000,
        panelClass: ['snackSbagliata'],
      });
    }
  }
  close() {
    this.dialogRef.close();
  }
  formControll(flag: boolean) {
    if (this.taskForm.get('descrizione').hasError('required')) {
      return true;
    } else {
      return false;
    }
  }
  save() {
    if (!this.taskForm.invalid) {
      this.tasksService.insertTask(this.task).subscribe((result) => {
        this.messaggio = result.message;
        this.snackBar.open(this.messaggio, 'Chiudi', {
          duration: 3000,
          panelClass: ['snackBarOk'],
        });
        if (this.messaggio.length < 20) {
          this.close();
        }
      });
    } else {
      this.taskForm.markAllAsTouched();
      this.snackBar.open('Operazione non valida', 'Chiudi', {
        duration: 3000,
        panelClass: ['snackSbagliata'],
      });
    }
  }
}
