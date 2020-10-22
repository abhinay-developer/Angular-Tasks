import { Component, OnInit } from '@angular/core';
export class ProjectsModel {
  id: number;
  projectTitle: string;
  isAddMoreDetails: boolean = false;
  employmentOrEducation: string;
  client: string;
  projectStatus: string;
  startedWorkingFrom: StartedWorkingFrom[] = [];
  workedTill: string = "Present";
  detailsOfProject: string;
  projectLocation: string;
  projectSite: string;
  natureOfEmployment: string;
  teamSize: number;
  role: string;
  roleDescription: string;
  skills: string;
}

export class StartedWorkingFrom {
  personId: number;
  selectYear: number;
  selectMonth: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  pModel: ProjectsModel = new ProjectsModel();
  swf: StartedWorkingFrom = new StartedWorkingFrom();
  constructor() { }

  ngOnInit(): void {

    this.pModel.startedWorkingFrom.push(this.swf);
  }

  addMoreDetails() {
    this.pModel.isAddMoreDetails = true;
  }
  save() {
    console.log(this.pModel);

  }

}
