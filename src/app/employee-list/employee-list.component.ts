import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit,OnDestroy {
 Employees:Employee[]=[];
 subscription:Subscription;
  constructor(private empService:EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
    this.subscription=this.empService.employeesChanged
    .subscribe((Employees:Employee[])=>{
      this.Employees=Employees;
    })
    this.Employees=this.empService.getEmployees();
    this.Employees.forEach(function(employee){
      var d =new Date(employee.jDate);
      employee.jDate=d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
    })
  }
  onDelete(index){
    this.empService.deleteEmployee(index);
  }

  goToForm(){
    this.router.navigate(['/registration']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
