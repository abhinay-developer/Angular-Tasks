import { Component, OnInit } from '@angular/core';
export class EmploymentModel {
  personId: number;
  designation: string;
  organisation: string;
  currentCompany: string;
  startedWorkingFrom: StartedWorkFrom[]=[];
  workedTill: string = "Present";
  currentSalaryRadio:string;
  currentSalary: CurrentSalary[]=[];
  keySkills: string;
  jobProfile:string;
  noticePeriod: String;
}
export class StartedWorkFrom {
  personId: number;
  selectYear: string;
  selectMonth: string;
}
export class CurrentSalary {
  perosonId: number;
  inLacks: string;
  inThousands: string;
  money:string;
}
@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {

  empModel: EmploymentModel = new EmploymentModel();
  cs:CurrentSalary=new CurrentSalary();
  swf:StartedWorkFrom=new StartedWorkFrom();


  
   
  constructor() {

   }

  ngOnInit(): void {
   this.empModel.startedWorkingFrom.push(this.swf);
   this.empModel.currentSalary.push(this.cs);
    console.log(this.empModel);

  }

}
