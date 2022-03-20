import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Users } from 'src/app/model/users';
import { UsersService } from 'src/app/service/users.service';
import { DialogUsersComponent } from '../dialog-users/dialog-users.component';

@Component({
  selector: 'app-dialog-elimina-users',
  templateUrl: './dialog-elimina-users.component.html',
  styleUrls: ['./dialog-elimina-users.component.css'],
})
export class DialogEliminaUsersComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
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

  ngOnInit(): void {}
  close() {
    this.dialogRef.close();
  }

  delete() {
    this.usersService.deleteUser(this.data.id).subscribe((result) => {
      this.messaggio = result.message;
      this.snackBar.open(this.messaggio, 'Chiudi', { duration: 3000 });
      if (this.messaggio.length < 20) {
        this.close();
      }
    });
  }
}
