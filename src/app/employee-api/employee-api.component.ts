import { Component } from '@angular/core';
import { EmpapireqService } from '../empapireq.service';
import { ToastrService } from 'ngx-toastr';

export interface IEmployeeApi {
  Id: number;
  Name: string;
  Description: string;
  Description2: string;
  Description3: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-employee-api',
  templateUrl: './employee-api.component.html',
  styleUrls: ['./employee-api.component.css']
})
export class EmployeeApiComponent {
  employeesHttpApi = [] as any;
  errorMessage: string = '';
  count: number = 0;
  selectedEmployee: IEmployeeApi | null = null;
  employeeId: number = 0;
  newEmployee: IEmployeeApi = {
    Id: 0,
    Name: '',
    Description: '',
    Description2: '',
    Description3: '',
    isComplete:false
  };

  constructor(private _empapireqService: EmpapireqService,private toastr: ToastrService) { }

  ngOnInit() {
    //HTTP api
    this._empapireqService.getEmployeesapi()
      .subscribe({
        next: (data2) => {
          this.employeesHttpApi = data2;
          this.count = data2.length;
        },
        error: (error) => (this.errorMessage = error),
      });
  }

  addEmployee() {
    this._empapireqService.postEmployeeapi(this.newEmployee)
      .subscribe({
        next: (data) => {
          this.employeesHttpApi.push(data);
          this.count++;
           this.toastr.success('Employee added successfully!', 'Success');
           this.resetForm();
        },
        error: (error) => {
           this.toastr.error('Failed to add employee!', 'Error');
          console.log(error);
        }
      });
  }
  
  updateEmployee(): void {
    if (this.selectedEmployee) {
      this._empapireqService.putEmployeeapi(this.selectedEmployee)
        .subscribe({
          next: () => {
            const index = this.employeesHttpApi.findIndex((e: { Id: number; }) => e.Id === this.selectedEmployee!.Id);
            if (index !== -1) {
              this.employeesHttpApi[index] = { ...this.selectedEmployee! };
            }
            this.toastr.success('Employee updated successfully!', 'Success');
            this.resetForm();
          },
          error: (error) => {
            this.toastr.error('Failed to update employee!', 'Error');
            console.log(error);
          }
        });
    }
  }

  deleteEmployee(employeeId: number) {
    if (confirm("Are you sure you want to delete this employee?")) {
      this._empapireqService.deleteEmployeeapi(employeeId)
        .subscribe({
          next: () => {
            const index = this.employeesHttpApi.findIndex((e: { Id: number; }) => e.Id === employeeId);
            if (index !== -1) {
              this.employeesHttpApi.splice(index, 1);
              this.count--;
              this.toastr.success('Employee deleted successfully!', 'Success');
            }
          },
          error: (error) => {
            this.toastr.error('Failed to delete employee!', 'Error');
            console.log(error);
          }
        });
    }
  }
  resetForm(): void {
    this.newEmployee = {
      Id: 0,
      Name: '',
      Description: '',
      Description2: '',
      Description3: '',
      isComplete: false
    };
    this.selectedEmployee = null;
  }
  
}
