import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  candidate_data = [
    { id: 10, name: 'Ash', department: 'Finance', joining_date: '8/8/2018' },
    { id: 11, name: 'Ash', department: 'Finance', joining_date: '8/10/2016' },
    { id: 12, name: 'John', department: 'HR', joining_date: "1/18/2011"},
    { id: 13, name: 'Zuri', department: 'Operations', joining_date: '11/28/2019' },
    { id: 14, name: 'Vish', department: 'Development', joining_date: '7/7/2017' },
    { id: 15, name: 'Barry', department: 'Operations', joining_date: '9/19/2014' },
    { id: 16, name: 'Ady', department: 'Finance', joining_date: '5/10/2014' },
    { id: 17, name: 'Gare', department: 'Development', joining_date: '6/6/2014' },
    { id: 18, name: 'Hola', department: 'Development', joining_date: '8/12/2010' },
    { id: 19, name: 'Ola', department: 'HR', joining_date: '7/5/2011' },
    { id: 20, name: 'Kim', department: 'Finance', joining_date: '10/20/2010' },
  ]
  ObjName!: any;
  candidates_data!: any[];
  candidatesExp_data!: any[];
  remove_Development!: any[];
  sort!: any[];
  distincit!: any[];
  expDate=new Date();
  expDate1!:any;
  b: any = {};
  constructor() { }

  ngOnInit(): void {
    this.experienceMore2Yrs();
    this.removeDepartment();
    this.sortByNameAndDate();
    this.onDepartmentDistincit();
  }


  SearchByName() {
    if (this.ObjName != null) {
      this.candidates_data = this.candidate_data.filter(res => {
        return res.name.toLowerCase().startsWith(this.ObjName);
      })
    }
  }

  experienceMore2Yrs() {
    this.candidatesExp_data = this.candidate_data.filter(res => {
      return this.expDate.getFullYear() - new Date(res.joining_date).getFullYear() >2;
    })
  }

  removeDepartment() {
    this.remove_Development = this.candidate_data.filter(res => {
      return res.department != 'Development';
    })
  }

  sortByNameAndDate() {
    this.sort = this.candidate_data.sort((a, b) => {
      return new Date(a.joining_date).getFullYear() - new Date(b.joining_date).getFullYear()
    });
     this.sort = this.sort.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  onDepartmentDistincit() {
    this.candidate_data.forEach(el => {
      this.b[el.department] = (this.b[el.department] || 0) + 1;
    })
  }
}
