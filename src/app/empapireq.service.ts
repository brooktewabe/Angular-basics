import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { IEmployee, IEmployeeApi } from './course/course.component';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmpapireqService {

  private _url:string="https://localhost:5001/api/TodoItems"

  constructor( private http:HttpClient) { }

  //casting to array
  getEmployeesapi():Observable<IEmployeeApi[]>{
    return this.http.get<IEmployeeApi[]>(this._url).pipe(
      catchError(this.errorHandler));
  }
  errorHandler( error:HttpErrorResponse){
    return throwError(()=> new Error(error.message||"server error"));
  }
}

