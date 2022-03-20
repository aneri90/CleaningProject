import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Users } from 'src/app/model/users';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-dialog-users',
  templateUrl: './dialog-users.component.html',
  styleUrls: ['./dialog-users.component.css'],
})
export class DialogUsersComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    public articoloBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogUsersComponent>,
    public usersService: UsersService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: number;
      title: string;
    }
  ) {}
  user: Users = new Users();
  messaggio: string;
  usersForm: FormGroup;

  formInit() {
    this.usersForm = this.articoloBuilder.group({
      username: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(25)]),
      ],
    });
  }

  ngOnInit(): void {
    this.formInit();
  }
  save() {
    if (!this.usersForm.invalid) {
      this.usersService.insertUser(this.user).subscribe((result) => {
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
      this.usersForm.markAllAsTouched();
      this.snackBar.open('Operazione non valida', 'Chiudi', {
        duration: 3000,
        panelClass: ['snackSbagliata'],
      });
    }
  }
  close() {
    this.dialogRef.close();
  }
}
