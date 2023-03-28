import { Component } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
  selectedId!:number;
  departments=[
    {"id":1,"name":":Angular"},
    {"id":2,"name":":Node"},
    {"id":3,"name":":Mongo DB"},
    {"id":4,"name":":Bootstrap"},
  ]
  constructor(private router: Router,private route:ActivatedRoute){}

  //department param could have any name as long as its the same with the sth.id 
  onSelect(department:any){
    this.router.navigate(['/department',department.id]);
  }



    // ngOnInit(){
  //   this.route.paramMap.subscribe((params:ParamMap)=>{
  //     let id =parseInt(<any>params.get('id'));
  //     this.selectedId=id;
  //   })
  // }
  // isSelected(department:any){
  //   return department.id=this.selectedId;
  // }
}
