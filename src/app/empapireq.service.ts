import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployeeApi } from './course/course.component';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpapireqService {
  addEmployeeApi(newEmployee: IEmployeeApi) {
    throw new Error('Method not implemented.');
  }

  private _url: string = "https://localhost:7126/api/ToDoItem";

  constructor(private http: HttpClient) { }

  //casting to array
  getEmployeesapi(): Observable<IEmployeeApi[]> {
    return this.http.get<IEmployeeApi[]>(this._url).pipe(
      catchError(this.errorHandler)
    );
  }

  //add new employee
  postEmployeeapi(employee: IEmployeeApi): Observable<IEmployeeApi> {
    return this.http.post<IEmployeeApi>(this._url, employee).pipe(
      catchError(this.errorHandler)
    );
  }

  //update employee
  putEmployeeapi(employee: IEmployeeApi): Observable<IEmployeeApi> {
    const url = `${this._url}/${employee.Id}`;
    return this.http.put<IEmployeeApi>(url, employee).pipe(
      catchError(this.errorHandler)
    );
  }

  //delete employee
  deleteEmployeeapi(id: number): Observable<any> {
    const url = `${this._url}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message || "server error"));
  }
}
