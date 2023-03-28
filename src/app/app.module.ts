import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DeptListOverviewComponent } from './dept-list-overview/dept-list-overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule} from '@angular/material/grid-list';
import { AngMaterialDashComponent } from './ang-material-dash/ang-material-dash.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { EmpapireqService } from './empapireq.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DeptListOverviewComponent,
    AngMaterialDashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
  ],
  providers: [EmployeeService,EmpapireqService],
  bootstrap: [AppComponent]
})
export class AppModule { }

