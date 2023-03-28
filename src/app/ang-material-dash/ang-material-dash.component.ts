import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { EmpoyeehttpService } from '../empoyeehttp.service';

export interface IEmployee{
  id:number,
  name:string
}
@Component({
  selector: 'app-ang-material-dash',
  templateUrl: './ang-material-dash.component.html',
  styleUrls: ['./ang-material-dash.component.css']
})

export class AngMaterialDashComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1},
          { title: 'Card 2', cols: 1, rows: 1},
          { title: 'Card 3', cols: 1, rows: 1},
          { title: 'Card 4', cols: 1, rows: 1}
        ];
      }
   
      return [
        { title: "Card 1", cols: 1, rows: 1, content: "Content for Card 1"},
        { title: "Card 2", cols: 1, rows: 1, content: "Content for Card 2" },
        { title: "Card 3", cols: 2, rows: 1 },
        { title: "Card 4", cols: 1, rows: 2, content: "Content for Card 4" }
      ];
    })
  );
  aNewName!:string;
  employeesHttp=[] as any;
  errorMessage:string='';
 
  constructor(private breakpointObserver: BreakpointObserver,private _employeeServiceHttp: EmpoyeehttpService) {}

  ngOnInit() {
  //HTTP
    this._employeeServiceHttp.getEmployeeshttp()
      .subscribe({
       next: data=>this.employeesHttp=data,
       error: error=>this.errorMessage=error,
      });
  }

}
