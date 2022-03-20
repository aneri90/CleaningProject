import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tasks } from '../model/tasks';
import {
  OperationResult,
} from '../model/operationResult';
import { PageAndSortFilter } from '../model/PageAndSortFilter';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  public getListTasks(): Observable<OperationResult<Tasks[]>> {
    return this.http.get<OperationResult<Tasks[]>>(
      this.baseUrl + '/Tasks/listTasks'
    );
  }
  public insertTask(newTask: Tasks): Observable<OperationResult<Tasks>> {
    return this.http.post<OperationResult<Tasks>>(
      this.baseUrl + '/Tasks/insertTask',
      newTask
    );
  }
  public modifyTask(newTask: Tasks): Observable<OperationResult<Tasks>> {
    return this.http.put<OperationResult<Tasks>>(
      this.baseUrl + '/Tasks/modifyTask',
      newTask
    );
  }
  public modifyTaskDate(newTask: Tasks): Observable<OperationResult<Tasks>> {
    return this.http.put<OperationResult<Tasks>>(
      this.baseUrl + '/Tasks/modifyTaskDate',
      newTask
    );
  }
  public deleteTask(id: number): Observable<OperationResult<Tasks>> {
    return this.http.delete<OperationResult<Tasks>>(
      this.baseUrl + '/Tasks/deleteTask/' + id
    );
  }
  public filterSearch(filter: string): Observable<OperationResult<Tasks[]>> {
    return this.http.post<OperationResult<Tasks[]>>(
      this.baseUrl + '/Tasks/search',
      filter
    );
  }
  public getListTasksFiltered(
    filter: PageAndSortFilter
  ): Observable<OperationResult<Tasks[]>> {
    return this.http.post<OperationResult<Tasks[]>>(
      this.baseUrl + '/Tasks/listFiltered',
      filter
    );
  }
  public getById(id: number): Observable<OperationResult<Tasks>> {
    return this.http.get<OperationResult<Tasks>>(this.baseUrl + '/Tasks/' + id);
  }
}
