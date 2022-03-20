import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as moment from 'moment';
import { PageAndSortFilter } from '../model/PageAndSortFilter';
import { Tasks } from '../model/tasks';
import { Users } from '../model/users';
import { PulitoreService } from '../service/pulitore.service';
import { TaskService } from '../service/task.service';
import { TasksService } from '../service/tasks.service';
import { UsersService } from '../service/users.service';
import { DialogEliminaTaskComponent } from './dialog-elimina-task/dialog-elimina-task.component';
import { DialogTasksComponent } from './dialog-tasks/dialog-tasks.component';
import { DialogToCleanComponent } from './dialog-to-clean/dialog-to-clean.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Tasks[];
  users: Users[];
  todayDate = moment();
  pulitore: string;
  frequenza: number;
  task: Tasks = new Tasks();
  searchText: string = '';
  messaggio: string = '';
  titolo = 'Tasks';
  filter: PageAndSortFilter = new PageAndSortFilter(0, 5, 'descrizione', 'asc');
  elementi = [
    { id: '5', value: '5' },
    { id: '10', value: '10' },
    { id: '15', value: '15' },
  ];
  check: boolean;
  totalElements: number;
  pageSize: number = 5;
  pageIndex: number = 0;
  displayedColumns = [
    'descrizione',
    'frequenza',
    'pulitore',
    'dataPulizia',
    'pulisci',
    'action',
    'checkbox',
  ];
  constructor(
    public tasksService: TasksService,
    public dialog: MatDialog,
    public usersService: UsersService,
    public pulitoreService: PulitoreService,
    public taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.checkData();
    this.setPulitore();
    this.setTask();
    this.getListTasks();
    this.getAllUsers();
  }
  setTask() {
    this.taskService.observable.subscribe((data) => {
      console.log(data);

      this.task = data;
      if (this.pulitore) {
        this.task.pulitore = this.pulitore;
        console.log(data);
      }
    });
  }
  checkData() {
    moment(this.task.dataPulizia, 'days').diff(
      moment(this.task.frequenza, 'days').calendar()
    ) < 1
      ? (this.check = false)
      : (this.check = true);
  }
  setPulitore() {
    this.pulitoreService.observable.subscribe((data) => {
      this.pulitore = data;
      console.log(data);
    });
  }
  getListTasks() {
    this.tasksService.getListTasks().subscribe((result) => {
      console.log(result);
      this.tasks = result.data;
      //this.totalElements = result.data.totalElements;
    });
  }
  getAllUsers() {
    this.usersService.getListUsers().subscribe((result) => {
      console.log(result);
      this.users = result.data;
    });
  }
  openDialogToAdd() {
    const dialogRef = this.dialog.open(DialogTasksComponent, {
      width: '500px',
      height: '500px',
      data: {
        title: 'Aggiungi task',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getListTasks();
    });
  }
  openDialogToClean(id: number) {
    const dialogRef = this.dialog.open(DialogToCleanComponent, {
      width: '500px',
      height: '500px',
      data: {
        id: id,
        title: 'Sicuro di voler pulire?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getListTasks();
    });
  }
  cerca() {
    if (this.searchText) {
      this.tasksService
        .filterSearch(this.searchText.toLowerCase())
        .subscribe((result) => {
          this.tasks = result.data;
        });
    } else {
      this.getListTasks();
    }
  }
  openDialogToUpdate(id: number) {
    const dialogRef = this.dialog.open(DialogTasksComponent, {
      width: '500px',
      height: '500px',
      data: {
        id: id,
        title: 'Modifica task',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getListTasks();
    });
  }
  openDialogToDelete(task: Tasks) {
    const dialogRef = this.dialog.open(DialogEliminaTaskComponent, {
      width: '500px',
      height: '500px',
      data: {
        id: task.id,
        title: 'Sicuro di voler eliminare ' + task.descrizione + '?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getListTasks();
    });
  }
  loadPage(event: PageEvent) {
    this.filter.pageIndex = event.pageIndex;
    this.filter.pageSize = event.pageSize;
    this.tasksService.getListTasksFiltered(this.filter).subscribe((result) => {
      this.totalElements = result.data.length;
      this.tasks = result.data;
    });
  }
  ordina(event: MatSort) {
    this.filter.sortDirection = event.direction;
    this.filter.pageSort = event.active;
    this.getListTasks();
  }
}
