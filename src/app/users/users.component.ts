import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { PageAndSortFilter } from '../model/PageAndSortFilter';
import { Users } from '../model/users';
import { UsersService } from '../service/users.service';
import { DialogEliminaUsersComponent } from './dialog-elimina-users/dialog-elimina-users.component';
import { DialogUsersComponent } from './dialog-users/dialog-users.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: Users[];
  titolo = 'Users';
  messaggio: string = '';
  searchText: string = '';
  filter: PageAndSortFilter = new PageAndSortFilter(0, 5, 'descrizione', 'asc');
  displayedColumns = ['username', 'registered', 'action'];
  constructor(public usersService: UsersService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getListUsers();
  }
  ordina(event: MatSort) {
    this.filter.sortDirection = event.direction;
    this.filter.pageSort = event.active;
    this.getListUsers();
  }
  getListUsers() {
    this.usersService.getListUsers().subscribe((result) => {
      console.log(result);
      this.users = result.data;
    });
  }
  openDialogToAdd() {
    const dialogRef = this.dialog.open(DialogUsersComponent, {
      width: '500px',
      height: '500px',
      data: {
        title: 'Aggiungi utente',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getListUsers();
    });
  }
  openDialogToDelete(user: Users) {
    const dialogRef = this.dialog.open(DialogEliminaUsersComponent, {
      width: '500px',
      height: '500px',
      data: {
        id: user.id,
        title: 'Sicuro di voler eliminare ' + user.username + '?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getListUsers();
    });
  }
}
