import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngMaterialDashComponent } from './ang-material-dash/ang-material-dash.component';
import { CourseComponent } from './course/course.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DeptListOverviewComponent } from './dept-list-overview/dept-list-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/course',pathMatch:'full'},
  {path:'department',component:DepartmentListComponent},
  {path:'department/:id',component:DepartmentDetailComponent,
  children:[
    {path:'overview',component:DeptListOverviewComponent}
  ]},
  {path:'course',component:CourseComponent},
  {path:'component',component:AngMaterialDashComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentListComponent,CourseComponent,PageNotFoundComponent,DepartmentDetailComponent,DeptListOverviewComponent]