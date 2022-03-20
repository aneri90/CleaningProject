import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  OperationResult,
  OperationResultUsers,
} from '../model/operationResult';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) {}

  public getListUsers(): Observable<OperationResultUsers> {
    return this.http.get<OperationResultUsers>(
      this.baseUrl + '/Users/listUsers'
    );
  }
  public deleteUser(id: number): Observable<OperationResultUsers> {
    return this.http.delete<OperationResultUsers>(
      this.baseUrl + '/Users/deleteUser/' + id
    );
  }
  public insertUser(user: Users): Observable<OperationResultUsers> {
    return this.http.post<OperationResultUsers>(
      this.baseUrl + '/Users/insertUser',
      user
    );
  }
}
