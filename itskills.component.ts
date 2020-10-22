import { Component, OnInit } from '@angular/core';
export class ITSkillsModel{

  id:number;
  itSkills:string;
  version:string;
  lastUsed:string;
  experience:ExperienceModel[]=[];
}

export class ExperienceModel{
  personId:number;
  years:string;
  months:string;
}
@Component({
  selector: 'app-itskills',
  templateUrl: './itskills.component.html',
  styleUrls: ['./itskills.component.css']
})
export class ItskillsComponent implements OnInit {

  itModel:ITSkillsModel=new ITSkillsModel();
  expModel:ExperienceModel=new  ExperienceModel();
  constructor() { }

  ngOnInit(): void {
 this.itModel.experience.push(this.expModel);
  }
  save(){
    console.log(this.itModel);
  }
}
