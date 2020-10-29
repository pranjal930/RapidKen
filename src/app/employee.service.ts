import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Employee } from "./employee.model";


@Injectable({
    providedIn: 'root',
  })
export class EmployeeService{
    employeesChanged = new Subject<Employee[]>();
    isFirst=true;
    employees:Employee[]=[
        /*{
            'name':'john doe 1',
            'position':'SDE',
            'about':'working as angular Developer in RapidKen',
            'jDate':'2018-12-10'
        },
        {
            'name':'john doe 2',
            'position':'SDE',
            'about':'working as angular Developer in RapidKen',
            'jDate':'2018-12-10'
        },
        {
            'name':'john doe 3',
            'position':'SDE',
            'about':'working as angular Developer in RapidKen',
            'jDate':'2018-12-10'
        }, */
    ]
    addEmployee(employee:Employee){
        console.log(this.employees);
        if(localStorage.getItem('Employees')&&this.employees!==[]){
            console.log(localStorage.getItem('Employees'));
            this.employees=JSON.parse(localStorage.getItem('Employees'));
        }
        this.employees.push(employee);
        localStorage.setItem('Employees',JSON.stringify(this.employees));
    }
    getEmployees(){
        console.log('service called');
        if(localStorage.getItem('Employees'))
        this.employees=JSON.parse(localStorage.getItem('Employees'));
        return this.employees.slice();
    }
    deleteEmployee(index:number){
        this.employees.splice(index,1);
        localStorage.setItem('Employees',JSON.stringify(this.employees));
        this.employeesChanged.next(this.employees.slice());
    }
}