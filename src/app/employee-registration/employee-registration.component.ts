import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  employee=new Employee();
  constructor(private router:Router,private empService:EmployeeService) { }
  ngOnInit(): void {
  }
  goToList(){
    this.router.navigate(['/']);
  }
  OnSubmit(){
    this.empService.addEmployee(this.employee);
    this.router.navigate(['']);
  }
}
