import { Component } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent {

  departmentId!:number;
  constructor(private route:ActivatedRoute,private router:Router){}
  ngOnInit(){
    // commented because this one can't update the page only the url
    // let id =parseInt(this.route.snapshot.paramMap.get('id')as string);
    // this.departmentId=id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id =parseInt(<any>params.get('id'));
      this.departmentId=id;
    })
  }
 goPrev(){
  let previousId=this.departmentId-1;
  this.router.navigate(['/department',previousId]);
 } 
 goNext(){
  let nextId=this.departmentId+1;
  this.router.navigate(['/department',nextId]);
 } 
 home(){
  let selectedId=this.departmentId;
  this.router.navigate(['/department',{id:selectedId}]);
}
 
showOverview(){
  this.router.navigate(['overview'],{relativeTo:this.route})
} 
}
