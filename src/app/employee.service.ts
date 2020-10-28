import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Employee } from "./employee.model";


@Injectable({
    providedIn: 'root',
  })
export class EmployeeService{
    employeesChanged = new Subject<Employee[]>();
    employees:Employee[]=[
        {
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
        },
    ]

    getEmployees(){
        console.log('service called');
        return this.employees.slice();
    }
    deleteEmployee(index:number){
        this.employees.splice(index,1);
        this.employeesChanged.next(this.employees.slice());
    }
}