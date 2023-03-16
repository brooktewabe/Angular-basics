import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { IEmployee } from './course/course.component';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class EmpoyeehttpService {
private _url:string="assets/data/employeehttp.json"

  constructor( private http:HttpClient) { }

  //casting to array
  getEmployeeshttp():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(
      catchError(this.errorHandler));
  }
  errorHandler( error:HttpErrorResponse){
    return throwError(()=> new Error(error.message||"server error"));
  }
}
