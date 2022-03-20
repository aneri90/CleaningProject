import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  OperationResult,
} from '../model/operationResult';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) {}

  public getListUsers(): Observable<OperationResult<Users[]>> {
    return this.http.get<OperationResult<Users[]>>(
      this.baseUrl + '/Users/listUsers'
    );
  }
  public deleteUser(id: number): Observable<OperationResult<Users>> {
    return this.http.delete<OperationResult<Users>>(
      this.baseUrl + '/Users/deleteUser/' + id
    );
  }
  public insertUser(user: Users): Observable<OperationResult<Users>> {
    return this.http.post<OperationResult<Users>>(
      this.baseUrl + '/Users/insertUser',
      user
    );
  }
}
