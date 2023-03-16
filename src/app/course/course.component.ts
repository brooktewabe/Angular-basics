import { Component, Input,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmpoyeehttpService } from '../empoyeehttp.service';

  //for employee http service
export interface IEmployee{
  id:number,
  name:string
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
} 
export interface newNames{
  name0:string,
  name2:string,
  name3:string
}
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
}) 

export class CourseComponent implements OnInit{
  name="Brook";
  employees=[] as any;
  employeesHttp=[] as any;
  public greeting:string='';
  errorMessage:string='';
  isDis=false; 
  val:number=0;
  name2:string='';
  dt:string='';
  lname:string='';
  nameL!:string;
  im='';
  //2nd way
  no1:any;
  no2:any;
  dispBlock=true;
  oper='';
  count:number=0;
  newArr=['Br','oo','k']

  newObj:newNames[]=[
    { name0: 'Br',name2: "oo",name3: "k"}
  ]
  newObj2:newNames=
    { name0: 'Br',name2: "oo",name3: "k"}

constructor(private _employeeService: EmployeeService,private _employeeServiceHttp: EmpoyeehttpService){}

ngOnInit() {
    this.employees=this._employeeService.getEmployees();
    this.count=Object.keys(this.employees).length;

//HTTP
    this._employeeServiceHttp.getEmployeeshttp()
      .subscribe({
       next: data=>this.employeesHttp=data,
       error: error=>this.errorMessage=error
      });
}

  greetMe()
  {
    this.greeting= "User is "+this.name;
    console.log(this.greeting)
  }
  hide() 
  {
    location.reload() 
  }
  // add(no1:string,no2:string){
  //   console.log(no1+no2);
  //   this.val= parseInt(no1)+parseInt(no2); 
  //   console.log(this.val);
  // }

  add(){
    console.log(this.no1+this.no2);
    if(this.oper=="+"){
      this.val= this.no1+this.no2; 
    }
    else if(this.oper=="-"){
      this.val= this.no1-this.no2; 
    }
    else if(this.oper=="*"){
      this.val= this.no1*this.no2; 
    }
     else if(this.oper=="/"){
      this.val= this.no1/this.no2; 
    }
   
  }
  urNameIs(){
    this.name2=this.name2;
  }
  urdNameIs(){
    this.lname=this.lname;
  }
  urlNameIs(){
    this.dt=this.dt;
  }
  //image from https://roytuts.com/how-to-upload-and-display-image-using-angular/ 

  imageName: any;
  selectFile(event: any) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  
  reader.onload = (_event) => {
    this.imageName = reader.result; 
  }
}
  colors=['Red','Blue','Green'];
  @Input() inputFromParent:string='';
  ty={
    nm:"b",
    ag:2
  }
  newStr='BRO';
  myCash=0.5;
  date=new Date();
  }


