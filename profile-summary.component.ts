import { Component, OnInit } from '@angular/core';

export class ProfileSummaryModel{
id:number;
profile:string;
}
@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.css']
})
export class ProfileSummaryComponent implements OnInit {
 psm:ProfileSummaryModel=new ProfileSummaryModel();

  constructor() { }

  ngOnInit(): void {
  }

  onSave(){
    console.log(this.psm);
  }
}
