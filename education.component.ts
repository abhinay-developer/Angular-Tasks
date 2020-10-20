import { Component, OnInit } from '@angular/core';

export class EducationModel {
  id: number;
  educationType: string;
  course: string;
  specilazation: string;
  university: string;
  courseType: string;
  yop: string;
  grading: string;
  marks: number;
}
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  eModel: EducationModel = new EducationModel();
 dEType:string;
 dCourse:string;
  dMarks:number;
  dUniversity:string;
  dSpecilazation:string;
  constructor() { }
  onSave() {
    localStorage.setItem("id", String(this.eModel.id));
    localStorage.setItem("eType", this.eModel.educationType);
    localStorage.setItem("course", this.eModel.course);
    localStorage.setItem("Specilazation", this.eModel.specilazation);
    localStorage.setItem("university", this.eModel.university);

    localStorage.setItem("courseType", this.eModel.courseType);

    localStorage.setItem('yop', this.eModel.yop);

    localStorage.setItem('grading', this.eModel.grading);

    localStorage.setItem('marks', String(this.eModel.marks));
     alert('Saved Successfully');
     console.log(this.eModel);
  }
  ngOnInit(): void {
this.dEType=localStorage.getItem('eType')
  this.dCourse=localStorage.getItem('course')
   this.dMarks=Number(localStorage.getItem('marks'));
   this.dUniversity=localStorage.getItem('university')
   this.dSpecilazation=localStorage.getItem('Specilazation');
  }







}



 // course:string[]=["Btech/BE","B.com","B.Sc","B.A","Diploma","B.B.A/B.M.S","Diploma"]