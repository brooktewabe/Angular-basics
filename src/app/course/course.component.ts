import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmpoyeehttpService } from '../empoyeehttp.service';
import { EmpapireqService } from '../empapireq.service';


//for employee http service
export interface IEmployee {
  id: number;
  name: string;
}
export interface IEmployeeApi {
  Id: number;
  Name: string;
  Description:string;
  Description2:string;
  Description3:string;  
  isComplete:boolean;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface newNames {
  name0: string;
  name2: string;
  name3: string;
}
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  name = 'Brook';
  cn:string='';
  employees = [] as any;
  employeesHttp = [] as any;
  employeesHttpApi = [] as any;
  greeting: string = ''; 
  errorMessage: string = '';
  errorMessage2: string = '';
  isDis = false;
  val: number = 0;
  name2: string = '';
  dt: string = '';
  lname: string = '';
  nameL!: string; 
  no1: any;
  no2: any;
  dispBlock = true;
  oper = '';
  count: number = 0;
  count2!: number;
  count3: number = 0;
  newArr = ['Br', 'oo', 'k'];
  newObj: newNames[] = [{ name0: 'Br', name2: 'oo', name3: 'k' }];
  newObj2: newNames = { name0: 'Br', name2: 'oo', name3: 'k' };
  colors = ['Red', 'Blue', 'Green'];
  @Input() inputFromParent: string = '';
  ty = {
    nm: 'b',
    ag: 2,
  };
  newStr = 'BRO';
  myCash = 0.5;
  date = new Date();
  constructor(private _employeeService: EmployeeService,private _employeeServiceHttp: EmpoyeehttpService,private _empapireqService: EmpapireqService) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.count = Object.keys(this.employees).length;
  
    //HTTP
    this._employeeServiceHttp.getEmployeeshttp()
    .subscribe({
      next: (data) => {
        this.employeesHttp = data;
        this.count2 = data.length;
      },
      error: (error) => (this.errorMessage = error),
    });
  
    //HTTP api
    this._empapireqService.getEmployeesapi()
    .subscribe({
      next: (data2) => {
        this.employeesHttpApi = data2;
        this.count3 = data2.length;
      },
      error: (error2) => (this.errorMessage2 = error2),
    });
  }
  

  greetMe() {
    this.greeting = 'User is ' + this.name;
    console.log(this.greeting);
  }
  hide() {
    location.reload();
  }

  add() {
    if (this.oper == '+') {
      this.val = this.no1 + this.no2;
    } else if (this.oper == '-') {
      this.val = this.no1 - this.no2;
    } else if (this.oper == '*') {
      this.val = this.no1 * this.no2;
    } else if (this.oper == '/') {
      this.val = this.no1 / this.no2;
    }
  }
  urNameIs() {
    this.name2 = this.name2;
  }
  urdNameIs() {
    this.lname = this.lname;
  }
  urlNameIs() {
    this.dt = this.dt;
  }
  //image from https://roytuts.com/how-to-upload-and-display-image-using-angular/

  imageName: any;
  selectFile(event: any) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.imageName = reader.result;
    };
  }
}
